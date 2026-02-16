import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API = axios.create({
  baseURL: "https://expense-tracker-6ame.onrender.com/expenses"
});

export const createExpense = async (data) => {
  return API.post("/", data, {
    headers: {
      "Idempotency-Key": uuidv4()
    }
  });
};

export const getExpenses = async (category = "", sort = "amount_desc") => {
  return API.get("/", {
    params: {
      category,
      sort
    }
  });
};
