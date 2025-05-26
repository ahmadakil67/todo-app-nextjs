import TodoItem from './TodoItem'

export default function TodoList({
  todos, setTodos,
  editingIndex, setEditingIndex,
  editedTask, setEditedTask
}) {
  return (
    <ul className="space-y-2">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          index={index}
          todos={todos}
          setTodos={setTodos}
          editingIndex={editingIndex}
          setEditingIndex={setEditingIndex}
          editedTask={editedTask}
          setEditedTask={setEditedTask}
        />
      ))}
    </ul>
  )
}
