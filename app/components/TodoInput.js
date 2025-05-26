import { useState } from 'react'

export default function TodoInput({ task, setTask, todos, setTodos }) {
  const [dueDate, setDueDate] = useState('')

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, {
        text: task,
        completed: false,
        dueDate: dueDate || null
      }])
      setTask('')
      setDueDate('')
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-2 mb-4">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        className="flex-grow px-3 py-2 border rounded text-black"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="px-3 py-2 border rounded text-black"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add
      </button>
    </div>
  )
}
