import axios from "axios";
import { IData } from "../components/Card/Card";
import { AppDispatch } from "../store/index";
import { dataSlice } from "../store/dataSlice";

export const fetchingData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataSlice.actions.dataFetch());
    const res = await axios.get<IData>(
      "https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json"
    );
    dispatch(dataSlice.actions.dataFetchSuccess(res.data));
  } catch (e) {
    dispatch(dataSlice.actions.dataFetchError((e as Error).message));
  }
};
