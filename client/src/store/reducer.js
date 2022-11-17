import { REGISTER_USER, LOGIN_USER, GET_USER } from "./actions/actions";

const initialState = {
  user: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state };
    case LOGIN_USER:
      return { ...state };
    case GET_USER:
      return { ...state };
    default:
      return { ...state };
  }
}
