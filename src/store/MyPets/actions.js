import axios from "axios";

export const MYPETS_DETAILS_FETCHED = "MYPETS_DETAILS_FETCHED";

const myPetsDetailsFetched = (myPets) => ({
  type: MYPETS_DETAILS_FETCHED,
  payload: myPets,
});

export const fetchmyPetsById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `http://localhost:4000/caretakers/mypets/${id}`
    );
    console.log(response);
    dispatch(myPetsDetailsFetched(response.data.myPets));
  };
};
