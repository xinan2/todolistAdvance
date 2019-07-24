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
    default:
      return state;
  }
};

export default todos
