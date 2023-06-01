// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachTodo, onDeleteTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    onDeleteTodo(id)
  }
  return (
    <li className="li-container">
      <p className="description">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
