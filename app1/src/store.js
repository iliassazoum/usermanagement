import { createStore } from 'redux';

const initialState = { users: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
