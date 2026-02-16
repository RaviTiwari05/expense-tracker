const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");


// POST /expenses
router.post("/", async (req, res, next) => {
  try {
    const { amount, category, description, date } = req.body;
    const idempotencyKey = req.headers["idempotency-key"];

    if (!idempotencyKey) {
      return res.status(400).json({ message: "Missing Idempotency-Key header" });
    }

    const existing = await Expense.findOne({ idempotencyKey });
    if (existing) {
      return res.status(200).json(existing);
    }

    if (amount < 0) {
      return res.status(400).json({ message: "Amount cannot be negative" });
    }

    const expense = await Expense.create({
      amount,
      category,
      description,
      date,
      idempotencyKey
    });

    res.status(201).json(expense);

  } catch (error) {
    next(error);  
  }
});


// GET /expenses
router.get("/", async (req, res, next) => {
  try {
    const { category, sort } = req.query;

    let filter = {};
    if (category) {
      filter.category = category;
    }

    let query = Expense.find(filter);

    if (sort === "date_desc") {
      query = query.sort({ date: -1 });
    }

    const expenses = await query.exec();
    res.json(expenses);

  } catch (error) {
    next(error);  
  }
});

module.exports = router;
