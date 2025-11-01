import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: "John arrange your toys",
  areToysArranged: false,
  currentStep: 0,
};

const toySlice = createSlice({
  name: 'toy',
  initialState,
  reducers: {
    setMessage: (state, action) => {
      state.message = action.payload; // "Mutate" safely!
    },
    setToysArranged: (state, action) => {
      state.areToysArranged = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    resetState: () => initialState,
  },
});

// Actions auto-generated!
export const { setMessage, setToysArranged, setCurrentStep, resetState } = toySlice.actions;

// Store with DevTools included!
export const store = configureStore({
  reducer: { toy: toySlice.reducer },
});