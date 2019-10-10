import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import authReducer from "./authReducer";
import channelReducer from "./channels";

const middlewares = [thunk];

const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const rootReducer = combineReducers({
  rootAuth: authReducer,
  channels: channelReducer
});

const store = createStore(rootReducer, enhancer);

export default store;
