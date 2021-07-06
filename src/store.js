import create from "zustand";
import { v4 as uuidv4 } from 'uuid';

const emptyTodo = {
  id: '',
  title: '',
  description: '',
  done: false
};

const updateTodo = (todos, id, title, description) => {
  const updatedTodos = todos.map((todo) => ({
    ...todo,
    title: todo.id === id ? title : todo.title,
    description: todo.id === id ? description : todo.description,
  }));
  updateLocalStorage(updatedTodos);
  return updatedTodos;
};

const toggleTodo = (todos, id) => {
  const updatedTodos = todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));
  updateLocalStorage(updatedTodos);
  return updatedTodos;
};

const addTodo = (todos, title, description) => {
  const updatedTodos = [
    ...todos,
    {
      id: uuidv4(),
      title,
      description,
      done: false,
    },
  ];
  updateLocalStorage(updatedTodos);
  return updatedTodos;
};

const loadTodos = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

const updateLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const toggleModal = (todos, id) => todos.find(todo => todo.id === id) || emptyTodo;

const useStore = create(
  (set) => ({
    todos: loadTodos(),
    newTodo: '',
    openModal: false,
    selectedTodo: emptyTodo,
    updateTodo: (id, title, description) =>
      set((state) => ({
        ...state,
        todos: updateTodo(state.todos, id, title, description),
      })),
    toggleTodo: (id) =>
      set((state) => ({
        ...state,
        todos: toggleTodo(state.todos, id),
      })),
    setNewTodo: (newTodo) =>
      set((state) => ({
        ...state,
        newTodo,
      })),
    addTodo: () =>
      set((state) => ({
        ...state,
        todos: addTodo(state.todos, state.newTodo),
        newTodo: "",
      })),
    toggleModal: (id) =>
      set((state) => ({
        ...state,
        openModal: !state.openModal,
        selectedTodo: toggleModal(state.todos, id)
      })),
  })
);

export default useStore;
