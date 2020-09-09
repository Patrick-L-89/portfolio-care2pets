import axios from "axios";
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
  setMessage,
} from "../appState/actions";

const loginSuccess = (userWithToken) => {
  return {
    type: "LOGIN_SUCCES",
    payload: userWithToken,
  };
};

export const signUp = (
  fullName,
  userName,
  email,
  password,
  streetName,
  city,
  houseNumber,
  phoneNumber,
  isCaretaker,
  animalTypesInterested,
  description
) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`http://localhost:4000/user/signup`, {
        fullName,
        userName,
        email,
        password,
        streetName,
        city,
        houseNumber,
        phoneNumber,
        isCaretaker,
        animalTypesInterested,
        description,
      });
      console.log("KJHDBGWF,KJABVCSwhat is response", response);
      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", true, "account created"));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email, password) => {
  return async (dispatch, getState) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`http://localhost:4000/user/login`, {
        email,
        password,
      });

      dispatch(loginSuccess(response.data));
      dispatch(showMessageWithTimeout("success", false, "welcome back!", 1500));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(setMessage("danger", true, error.response.data.message));
      } else {
        console.log(error.message);
        dispatch(setMessage("danger", true, error.message));
      }
      dispatch(appDoneLoading());
    }
  };
};
