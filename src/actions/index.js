export const fetchInitialData = (data) => {
  return (dispatch, getState) => {
    fetch('../data/tasks.json').then(data => {
      console.log('fetch data: ', data);
    });
    dispatch({
      type: 'FETCH_INITIAL_DATA',
    })
  }
};
