import axios from "axios";

export const fetchingData = async () => {
  const res = await axios.get(
    "https://data.ifiniti.co/ifc/ed348259-5864-440b-a4c5-523657361ede.json"
  );
  return res.data;
};
