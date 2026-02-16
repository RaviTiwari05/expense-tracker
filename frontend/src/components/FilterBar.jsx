export default function FilterBar({ setFilter }) {
  return (
    <div>
      <input placeholder="Filter by category"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
