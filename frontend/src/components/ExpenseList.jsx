export default function ExpenseList({ expenses }) {
  if (!expenses || expenses.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        No expenses found.
      </p>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
          <th>Description</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        {expenses.map((exp) => (
          <tr key={exp._id}>
            <td>₹{parseFloat(exp.amount).toFixed(2)}</td>
            <td>{exp.category}</td>
            <td>{exp.description}</td>
            <td>
              {new Date(exp.date).toLocaleDateString("en-IN")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
