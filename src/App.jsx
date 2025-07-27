import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Workout from "./pages/Workout";




function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/workout" element={<Workout />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
    


