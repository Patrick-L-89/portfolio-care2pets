import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import myPetsDetails from "./MyPets/reducer";
import searchCaretakers from "./SearchCaretakers/reducer";

export default combineReducers({
  appState,
  user,
  myPetsDetails,
  searchCaretakers,
});
