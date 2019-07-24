export const fetchInitialData = (callback) => {
  return (dispatch) => {
    fetch('https://gist.githubusercontent.com/xinan2/a67ea24bda350697a77ea7daee1b8eef/raw/a008e97361eee1f335c64db7d762451f02b5949c/tasks.json').then(response => {
      return response.json();
    }).then(data => {
      dispatch({ type: 'FETCH_INITIAL_DATA_SUCCESS', data });
      if (typeof callback === 'function') callback();
    }).catch(err => dispatch({ type: 'FETCH_INITIAL_DATA_ERROR', err }));
    dispatch({
      type: 'FETCH_INITIAL_DATA',
    })
  }
};

export const addItem = (data) => {
  return ({
    type: 'ADD_ITEM',
    data
  })
};

export const dropItem = (data) => {
  return ({
    type: 'DROP_ITEM',
    data
  })
};

export const removeItem = (data) => {
  return ({
    type: 'REMOVE_ITEM',
    data
  })
};
