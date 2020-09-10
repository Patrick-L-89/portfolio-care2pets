import axios from "axios";

export const SEARCH_CARETAKERS_FETCHED = "SEARCH_CARETAKERS_FETCHED";

const searchCaretakersFetched = (animalTypeFilter) => ({
  type: SEARCH_CARETAKERS_FETCHED,
  payload: animalTypeFilter,
});

export const fetchCaretakersByAnimalType = (animalTypeFilter) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `http://localhost:4000/caretakers/${animalTypeFilter}`
    );
    console.log("WHAT IS MY response?", response.data.searchCaretakers);
    dispatch(searchCaretakersFetched(response.data.searchCaretakers));
  };
};
