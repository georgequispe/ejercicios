import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workout from "./pages/Workout";
import Layout from "./components/Layout";

function App() {
  return (
    <>     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
    


