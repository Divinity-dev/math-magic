import './App.css';
import { Routes, Route } from 'react-router-dom';
import Calculator from './Components/calculator';
import Quotes from './Components/Quotes';
import Home from './Components/Home';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </>
  );
}
