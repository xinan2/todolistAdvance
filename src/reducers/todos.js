import { fromJS } from "immutable";

const initialState = fromJS({
  todo: [],
  inProgress: [],
  done: [],
});

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INITIAL_DATA_SUCCESS':
      const todo = action.data.filter(data => data.status === 0);
      const inProgress = action.data.filter(data => data.status === 1);
      const done = action.data.filter(data => data.status === 2);

      return state
          .set('todo', fromJS(todo))
          .set('inProgress', fromJS(inProgress))
          .set('done', fromJS(done));
    case 'ADD_ITEM':
      return state.update('todo', todo => todo.push(fromJS(action.data)));
    case 'DROP_ITEM':
      //TODO: OPTIMIZE THIS CODE TO BE MORE DYNAMIC
      if(action.data.status === 0) return state.update('todo', todo => todo.push(fromJS(action.data)));
      if(action.data.status === 1) return state.update('inProgress', inProgress => inProgress.push(fromJS(action.data)));
      if(action.data.status === 2) return state.update('done', done => done.push(fromJS(action.data)));
      return state;
    case 'REMOVE_ITEM':
      if(action.data.status === 0) return state.update('todo', todo => todo.filter((item) => item.get('id') !== action.data.id));
      if(action.data.status === 1) return state.update('inProgress', inProgress => inProgress.filter((item) => item.get('id') !== action.data.id));
      if(action.data.status === 2) return state.update('done', done => done.filter((item) => item.get('id') !== action.data.id));
      return state;
    default:
      return state;
  }
};

export default todos
