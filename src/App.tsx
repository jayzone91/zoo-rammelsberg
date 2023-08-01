import { Route, Routes } from "react-router-dom";
import useTitle from "./hooks/useTitle";
import { Home } from "./pages";

function App() {
  useTitle();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
