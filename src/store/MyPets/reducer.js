import { MYPETS_DETAILS_FETCHED } from "./actions";

const initialState = {
  myPets: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case MYPETS_DETAILS_FETCHED:
      console.log("DOES MY CASE RUN??? DOES IT?");
      return { ...state, ...payload };

    default:
      return state;
  }
};
