import { SET_CURRENT_USER } from "./types";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import { FETCH_CHANNELS } from "./types";

const instance = axios.create({
  baseURL: "https://api-chatr.herokuapp.com/"
});
export const fetchChannels = () => {
  console.log("In Fetching");
  return async dispatch => {
    try {
      const res = await instance.get("channels/");
      const channels = res.data;
      dispatch({
        type: FETCH_CHANNELS,
        payload: channels
      });
    } catch (error) {
      console.error(error);
      dispatch(setErrors(error));
    }
  };
};

export const checkForExpiredToken = () => {
  return async dispatch => {
    // Get token
    const token = await AsyncStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      console.log((user.exp - currentTime) / 60);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        await dispatch(setAuthToken(token));
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  return async dispatch => {
    if (token) {
      await AsyncStorage.setItem("token", token);
      instance.defaults.headers.common.Authorization = `jwt ${token}`;
      console.log(fetchChannels());
      dispatch(fetchChannels());
    } else {
      await AsyncStorage.removeItem("token");
      delete instance.defaults.headers.common.Authorization;
    }
  };
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

export const login = (userData, navigation) => {
  return async dispatch => {
    try {
      let response = await instance.post("login/", userData);
      let user = response.data;
      let decodedUser = jwt_decode(user.token);
      setAuthToken(user.token);
      dispatch(setCurrentUser(decodedUser));
    } catch (error) {
      console.error(error);
    }
  };
};

export const signup = (userData, navigation) => {
  return async dispatch => {
    try {
      await instance.post("signup/", userData);
      dispatch(login(userData, navigation));
    } catch (error) {
      console.error(error);
    }
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(setAuthToken());
    dispatch(setCurrentUser());
  };
};
