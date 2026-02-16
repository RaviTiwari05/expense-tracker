export default function ExpenseList({ expenses }) {

  const total = expenses.reduce((sum, exp) => {
    return sum + parseFloat(exp.amount);
  }, 0);

  return (
    <div>
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(exp => (
            <tr key={exp._id}>
              <td>{exp.amount}</td>
              <td>{exp.category}</td>
              <td>{exp.description}</td>
              <td>{new Date(exp.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
