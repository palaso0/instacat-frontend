import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store/store";

export interface UiState {
  modalState: boolean;
}

const initialState: UiState = {
  modalState: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setModalState: (state, action) => {
      state.modalState = action.payload;
    },
  },
});

export const selectModalState = (state: RootState) => state.ui.modalState;
export const { setModalState } = uiSlice.actions;
export default uiSlice.reducer;
