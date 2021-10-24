import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface ErrorType {
  header: string;
  subHeader: string;
}

interface ErrorState {
  error?: ErrorType;
}

const initialState: ErrorState = {
  error: undefined,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = undefined;
    },
    setError: (state, action: PayloadAction<ErrorType>) => {
      state.error = action.payload;
    },
  },
});

export const { clearError, setError } = errorSlice.actions;

export const selectError = (state: RootState) => state.error.error;

export default errorSlice.reducer;
