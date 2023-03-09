import { useEffect } from "react";
import Card from "./components/Card/Card";
import { useAppDispatch } from "./hooks";
import { fetchingData } from "./services/fetch";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchingData());
  }, []);
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;
