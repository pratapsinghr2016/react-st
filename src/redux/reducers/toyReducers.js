import { RESET_STATE, SET_CURRENT_STEP, SET_MESSAGE, SET_TOYS_ARRANGED } from "../actions/toyActions";

// ========== INITIAL STATE ==========
const initialState = {
  message: "John arrange your toys",
  areToysArranged: false,
  currentStep: 0, // 0: Mother, 1: Father, 2: Sister, 3: John
};

// ========== REDUCER ==========
export const toyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };

    case SET_TOYS_ARRANGED:
      return {
        ...state,
        areToysArranged: action.payload,
      };

    case SET_CURRENT_STEP:
      console.log("REDUCER STATE", action.payload);
      return {
        ...state,
        currentStep: action.payload,
      };

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};