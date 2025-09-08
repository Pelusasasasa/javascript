
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


export default {
    initialStore
}