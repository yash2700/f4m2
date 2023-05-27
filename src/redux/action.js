// actions.js

export const setUsers = (user) => ({
    type: 'SET_USER',
    payload: user,
  });
  
  export const clearUser = () => ({
    type: 'CLEAR_USER',
  });
  