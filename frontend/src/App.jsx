import { useEffect, useState } from "react";
import { getExpenses } from "./api";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import FilterBar from "./components/FilterBar";

function App() {

  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchExpenses = async () => {
    const params = {
      category: filter,
      sort: "date_desc"
    };
    const res = await getExpenses(params);
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, [filter]);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseForm refresh={fetchExpenses} />
      <FilterBar setFilter={setFilter} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
