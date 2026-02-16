import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

export const createExpense = async (data) => {
  return API.post("/expenses", data, {
    headers: {
      "Idempotency-Key": uuidv4()
    }
  });
};

export const getExpenses = async (params) => {
  return API.get("/expenses", { params });
};
