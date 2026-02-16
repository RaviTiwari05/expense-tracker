import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API = axios.create({
  baseURL: "http://localhost:5000/expenses"
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
