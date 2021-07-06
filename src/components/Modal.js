import React, { useRef, useState } from 'react';
import useStore from '../store';

function Modal() {
  const store = useStore((state) => state);
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const modalRef = useRef();
  const updateTodo = () => {
    store.updateTodo(store.selectedTodo.id, title || store.selectedTodo.title, description || store.selectedTodo.description);
    closeModal();
  }

  const closeModal = () => {
    store.toggleModal('');
    setTitle('');
    setDescription('');
  }

  return (
    <div ref={modalRef} className={`ui modal ${store.openModal ? 'visible active' : ''}`}>
      <i className="close icon" onClick={() => closeModal()}></i>
      <div className="header">
        Todo
      </div>
      <div className="content">
        <div className="ui four column centered grid">
        <div className="ten wide column">
            <p>Title</p>
            <div className="ui fluid action input">
              <input type="text" value={ title || store.selectedTodo.title } onChange={(e) => setTitle(e.target.value)} />
            </div>
          </div>
          <div className="ten wide column">
            <p>Description</p>
            <div className="ui fluid action input">
              <textarea value= { description || store.selectedTodo.description } onChange={(e) => setDescription(e.target.value)}/>
            </div>
          </div>
        </div>
        <div className="ui hidden divider"></div>
      </div>
      <div className="actions">
        <div className="ui black deny button" onClick={() => closeModal()}>
          Nope
        </div>
        <div className="ui positive right labeled icon button" onClick={() => updateTodo()}>
          Save
          <i className="checkmark icon"></i>
        </div>
      </div>
    </div>
  );
}

export default Modal;
