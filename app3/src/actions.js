export const fetchUsers = () => async dispatch => {
    const response = await axios.get('http://localhost:8080/user/all');
    dispatch({ type: 'FETCH_USERS', payload: response.data });
  };
  
  export const addUser = user => async dispatch => {
    const response = await axios.post('http://localhost:8080/user/add', user);
    dispatch({ type: 'ADD_USER', payload: response.data });
  };
  
  export const updateUser = user => async dispatch => {
    const response = await axios.put('http://localhost:8080/user/update', user);
    dispatch({ type: 'UPDATE_USER', payload: response.data });
  };
  
  export const deleteUser = id => async dispatch => {
    await axios.delete(`http://localhost:8080/user/delete/${id}`);
    dispatch({ type: 'DELETE_USER', payload: id });
  };
  