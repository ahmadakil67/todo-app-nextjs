export default function TodoFilters({ filter, setFilter }) {
  return (
    <div className="flex justify-between mb-4">
      {['all', 'completed', 'pending'].map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded text-sm ${filter === f ? 'bg-blue-600 text-white' : 'bg-gray-300 text-black'}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  )
}
