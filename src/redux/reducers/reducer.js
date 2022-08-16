import * as types from '../actionTypes/actionTypes'

const initialState = {
  some: 0,
  navbar: [],
  categoryId: "",
  content: []
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_NAVBAR:
      return {
        ...state,
        navbar: [...action.navbarData]
      };
    default:
      return state;
  }
};

export default reducer