import React from 'react';
import useStore from '../store';

function TodoList() {
  const store = useStore((state) => state);
  function createMarkup(text) {
    return {__html: text};
  }
  return (
    <div className="ui four column centered grid">
      <div className="column">
        {store.todos.map((todo) => (
          <div className="ui four column centered grid" key={todo.id}>
            <div className="two column row">
              <div className="ui toggle inverted checkbox">
                <input type="checkbox" name="public" checked={todo.done} onChange={() => store.toggleTodo(todo.id)} />
                <label><a href="/#" onClick={() => store.toggleModal(todo.id)} >{todo.title}</a></label>
              </div>
            </div>
            <div className="two column row">
                  <div className={`${todo.done ? 'green' : ''}`} dangerouslySetInnerHTML={createMarkup(todo.description)} disabled/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
