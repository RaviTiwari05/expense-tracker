const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");



router.post("/", async (req, res, next) => {
  try {
    const { amount, category, description, date } = req.body;
    const idempotencyKey = req.headers["idempotency-key"];

    if (!idempotencyKey) {
      return res.status(400).json({ message: "Idempotency-Key header required" });
    }

    if (!amount || !category || !date) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    if (Number(amount) < 0) {
      return res.status(400).json({ message: "Amount cannot be negative" });
    }

    
    const normalizedCategory = category.trim();

    
    const existing = await Expense.findOne({ idempotencyKey });

    if (existing) {
      return res.status(200).json({
        ...existing._doc,
        amount: existing.amount.toString()
      });
    }

    const expense = await Expense.create({
      amount,
      category: normalizedCategory,
      description,
      date,
      idempotencyKey
    });

    res.status(201).json({
      ...expense._doc,
      amount: expense.amount.toString()
    });

  } catch (error) {
    next(error);
  }
});



router.get("/", async (req, res, next) => {
  try {
    const { category, sort } = req.query;

    let filter = {};

    
    if (category && category.trim() !== "") {
      filter.category = {
        $regex: `^${category.trim()}`,
        $options: "i"   
      };
    }

    let query = Expense.find(filter);

    if (sort === "date_desc") {
      query = query.sort({ date: -1 });
    }

    const expenses = await query.exec();

   
    const formatted = expenses.map(exp => ({
      ...exp._doc,
      amount: exp.amount.toString()
    }));

    res.json(formatted);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
