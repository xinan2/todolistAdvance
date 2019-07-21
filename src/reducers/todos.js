const initState = {
  todo: [],
  inProgress: [],
  done: []
};

const todos = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_DATA':
      // return state.concat([action.next]);
      console.log('reducers');
      return state;
    default:
      return state;
  }
}

export default todos
