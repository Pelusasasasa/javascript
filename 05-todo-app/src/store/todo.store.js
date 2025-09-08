
const Filters = {
    All: 'All',
    Pending: 'Pending',
    Completed: 'Completed'
};

const state = {
    todos: [
        { id: 1, name: 'Learn React', completed: false },
        { id: 2, name: 'Learn Redux', completed: false },
        { id: 3, name: 'Learn React-Redux', completed: false }
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

const addTodo = ( description ) => {
    throw new Error('Not implemented');
};

const tooggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
};

const deleteTodo = ( todoId ) => {
    throw new Error('Not implemented');
}

const deleteCompleted = (  ) => {
    throw new Error('Not implemented');
}

const setFilter = ( newFilter = Filters.All ) => {
    throw new Error('Not implemented');
};

const getCurrentFilter = () => {
    throw new Error('Not implemented');
}


export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    initialStore,
    loadStore,
    setFilter,
    tooggleTodo,
}