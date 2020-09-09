import { MYPETS_DETAILS_FETCHED } from "./actions";

const initialState = {
  myPets: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MYPETS_DETAILS_FETCHED:
      return { ...state, ...payload };

    default:
      return state;
  }
};
