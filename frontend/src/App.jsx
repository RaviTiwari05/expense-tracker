import { useEffect, useState } from "react";
import { getExpenses } from "./api";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./styles.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("amount_desc");

  const fetchExpenses = async () => {
    try {
      const res = await getExpenses(category, sort);
      setExpenses(res.data);
    } catch (err) {
      console.error("Error fetching expenses");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, [category, sort]);

  const total = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  return (
    <div className="container">
      <h1>Expense Tracker</h1>

      <ExpenseForm refresh={fetchExpenses} />

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button onClick={() => setSort("date_desc")}>
          Sort by Newest
        </button>
      </div>

      <div className="total">
        Total: ₹{total.toFixed(2)}
      </div>

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
