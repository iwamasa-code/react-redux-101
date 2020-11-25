import { INCREMENT, DECREMENT } from "../actions";

const initinalState = { value: 0 };

export default (state = initinalState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
};
