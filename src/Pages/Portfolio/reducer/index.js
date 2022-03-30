import { SET_USER } from './actionTypes';

const initialState = {
  user: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action;
      return { ...state, user };
    default:
      return state;
  }
};

export default reducer;
