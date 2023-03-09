import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData } from "../components/Card/Card";

interface IDataState {
  data: IData | null;
  isLoading: boolean;
  error: string;
}

const initialState: IDataState = {
  data: null,
  isLoading: false,
  error: "",
};
export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    dataFetch(state) {
      state.isLoading = true;
    },
    dataFetchSuccess(state, action: PayloadAction<IData>) {
      state.isLoading = false;
      state.error = "";
      state.data = action.payload;
    },
    dataFetchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default dataSlice.reducer;
