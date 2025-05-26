import { formatDistanceToNow, isPast, parseISO } from 'date-fns'

export default function TodoItem({
  todo, index, todos, setTodos,
  editingIndex, setEditingIndex,
  editedTask, setEditedTask
}) {
  const toggleComplete = () => {
    const updated = [...todos]
    updated[index].completed = !updated[index].completed
    setTodos(updated)
  }

  const removeTask = () => {
    const updated = [...todos]
    updated.splice(index, 1)
    setTodos(updated)
  }

  const saveEditedTask = () => {
    const updated = [...todos]
    updated[index].text = editedTask
    setTodos(updated)
    setEditingIndex(null)
    setEditedTask('')
  }

  const dueDateText = () => {
    if (!todo.dueDate) return null
    const parsed = parseISO(todo.dueDate)
    if (isPast(parsed) && !todo.completed) {
      return <span className="text-red-600 font-semibold ml-2">❗ Overdue</span>
    } else {
      return <span className="text-sm text-gray-500 ml-2">⏳ Due in {formatDistanceToNow(parsed, { addSuffix: true })}</span>
    }
  }

  return (
    <li className="flex justify-between items-start bg-white text-black p-2 rounded shadow">
      <div className="flex items-start gap-2 w-full">
        <input type="checkbox" checked={todo.completed} onChange={toggleComplete} className="mt-1" />
        <div className="flex-grow">
          {editingIndex === index ? (
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              className="w-full px-2 py-1 border rounded"
            />
          ) : (
            <>
              <p className={`text-base ${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</p>
              {todo.dueDate && dueDateText()}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1 ml-2">
        {editingIndex === index ? (
          <button onClick={saveEditedTask} className="text-green-600 hover:text-green-800 text-sm">Save</button>
        ) : (
          <button onClick={() => {
            setEditingIndex(index)
            setEditedTask(todo.text)
          }} className="text-yellow-500 hover:text-yellow-700 text-sm">Edit</button>
        )}
        <button onClick={removeTask} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
      </div>
    </li>
  )
}
