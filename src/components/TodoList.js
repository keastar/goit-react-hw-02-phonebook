import React from 'react';
// import './TodoList.scss';

// const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
const TodoList = ({ todos }) => (
  <ul className="TodoList">
    {todos.map(({ id, text }) => (
      <li
        key={id}
        // className={classNames('TodoList__item', {
        //   'TodoList__item--completed': completed,
        // })}
      >
        <input
          type="text"
          // className="TodoList__checkbox"
          // checked={completed}
          // onChange={() => onToggleCompleted(id)}
        />
        {/* className="TodoList__text" */}
        <p>{text}</p>
        <button
          type="button"
          // className="TodoList__btn"
          // onClick={() => onDeleteTodo(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
