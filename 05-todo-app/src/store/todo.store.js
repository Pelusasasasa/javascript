import { Todo } from "../todos/models/todo.model";

const Filters = {
    All: 'All',
    Pending: 'Pending',
    Completed: 'Completed'
};

const state = {
    todos: [
        { id: 1, description: 'Learn React', done: false },
        { id: 2, description: 'Learn Redux', done: false },
        { id: 3, description: 'Learn React-Redux', done: false }
    ],
    filter: Filters.All
};

const initialStore = () => {
    console.log(state)
    console.log('initialStore aguacate')
};


const loadStore = () => {
    throw new Error('Not implemented');
}

const getTodos = ( filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return state.todos;
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not defined`);
    }
}

const addTodo = ( description ) => {
    if (!description) throw new Error('Description is required');

    state.todos.push(new Todo(description));
};

const tooggleTodo = ( todoId ) => {
    state.todos.map(todo => {
        if (todoId == todo.id) todo.done = !todo.done;

        return todo;
    });
};

const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter(todo => todo.id != todoId);
}

const deleteCompleted = (  ) => {
    state.todos = state.todos.filter(todo => todo.done);
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
};

const getCurrentFilter = () => {
    return state.filter;
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initialStore,
    loadStore,
    setFilter,
    tooggleTodo,
}