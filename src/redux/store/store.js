import { combineReducers, legacy_createStore as createStore } from "redux";
import { toyReducer } from "../reducers/toyReducers";

const rootReducer = combineReducers({
  toyStore: toyReducer,
  // You can add more reducers here:
  // userStore: userReducer,
  // cartStore: cartReducer,
});

// ========== CREATE STORE ==========
export const store = createStore(
  rootReducer,
  // Enable Redux DevTools Extension if available
  globalThis.__REDUX_DEVTOOLS_EXTENSION__?.()
);