import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import myPetsDetails from "./MyPets/reducer";

export default combineReducers({
  appState,
  user,
  myPetsDetails,
});
