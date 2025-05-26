'use client'
import { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFilters from './TodoFilters'
import DarkModeToggle from './DarkModeToggle'

export default function TodoApp() {
  const [todos, setTodos] = useState([])
  const [task, setTask] = useState('')
  const [editingIndex, setEditingIndex] = useState(null)
  const [editedTask, setEditedTask] = useState('')
  const [filter, setFilter] = useState('all')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
    const storedDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false
    setTodos(storedTodos)
    setDarkMode(storedDarkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed
    if (filter === 'pending') return !todo.completed
    return true
  })

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen p-6 transition-all`}>
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold mr-5">My TODO App</h1>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <TodoInput task={task} setTask={setTask} todos={todos} setTodos={setTodos} />

        <TodoFilters filter={filter} setFilter={setFilter} />

        <TodoList
          todos={filteredTodos}
          setTodos={setTodos}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
        />
      </div>
    </div>
  )
}
