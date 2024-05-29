import { Routes, Route } from "react-router-dom";

import Map from "./components/Map";
import House from './components/House';
import Garden from './components/Garden';
import School from './components/School';
import Museum from './components/Museum';

function App() {
  return (
    <div>
      <h1>Map Navigation</h1>
      <Map />
      <Routes>
          <Route path="/" element={<House />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/school" element={<School />} />
          <Route path="/museum" element={<Museum />} />
        </Routes>
    </div>
  );
}

export default App;
