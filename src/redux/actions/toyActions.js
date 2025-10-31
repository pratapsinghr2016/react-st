
// ========== ACTION TYPES ==========
export const SET_MESSAGE = 'SET_MESSAGE';
export const SET_TOYS_ARRANGED = 'SET_TOYS_ARRANGED';
export const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
export const RESET_STATE = 'RESET_STATE';

// ========== ACTION CREATORS ==========
export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const setToysArranged = (isArranged) => ({
  type: SET_TOYS_ARRANGED,
  payload: isArranged,
});

export const setCurrentStep = (step) => ({
  type: SET_CURRENT_STEP,
  payload: step,
});

export const resetState = () => ({
  type: RESET_STATE,
});