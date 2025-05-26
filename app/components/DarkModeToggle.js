export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 text-sm cursor-pointer"
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
