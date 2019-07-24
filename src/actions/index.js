export const fetchInitialData = (data) => {
  return (dispatch, getState) => {
    fetch('https://gist.githubusercontent.com/xinan2/a67ea24bda350697a77ea7daee1b8eef/raw/a008e97361eee1f335c64db7d762451f02b5949c/tasks.json').then(response => {
      return response.json();
    }).then(data => { dispatch({ type: 'FETCH_INITIAL_DATA_SUCCESS', data }) })
        .catch(err => dispatch({ type: 'FETCH_INITIAL_DATA_ERROR', err }));
    dispatch({
      type: 'FETCH_INITIAL_DATA',
    })
  }
};
