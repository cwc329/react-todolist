import { useContext } from 'react';
import styled, { css } from 'styled-components';

const TodoCard = styled.div`
  text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'}
`

export default function Todos({StyleContext, todo, handlers}) {
  const Button = useContext(StyleContext);
  return(
    <TodoCard className="todo__card" data-id={todo.id} isCompleted={todo.isCompleted}>
      <div className="todo__card__content">
        {todo.content}
      </div>
      <div className="todo__card__controls">
        <button className="todo__card__controls__statusBtn" onClick={handlers.changeStatus}>
          {(!todo.isCompleted && 'Done') || (todo.isCompleted && 'Undone')}
        </button>
        <button className="todo__card__controls__deleteBtn" onClick={handlers.deleteTodo}>
          Delete
        </button>
      </div>
    </TodoCard>
  )
}