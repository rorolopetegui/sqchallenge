import React from 'react';
import useStore from '../store';

function AddTodo() {
  const store = useStore((state) => state);

  return (
    <div className="ui four column centered grid">
      <div className="column">
        <div className="ui fluid action input">
          <input type="text" placeholder="New todo..." value={store.newTodo} onChange={(e) => store.setNewTodo(e.target.value)} />
          <button 
            className="ui button" 
            onClick={() => {
              store.addTodo();
            }}
          >
            Add Todo
          </button>
        </div>
       
      </div>
    </div>
  );
}

export default AddTodo;
