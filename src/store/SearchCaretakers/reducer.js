import { SEARCH_CARETAKERS_FETCHED } from "./actions";

const initialState = {
  searchCaretakers: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_CARETAKERS_FETCHED:
      console.log("DOES MY CASE RUN??? DOES IT?");
      return { ...state, ...payload };

    default:
      return state;
  }
};
