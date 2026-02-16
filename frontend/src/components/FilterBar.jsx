export default function FilterBar({ setFilter }) {
  return (
    <div className="filter-bar">
      <input
        placeholder="Filter by category"
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}
