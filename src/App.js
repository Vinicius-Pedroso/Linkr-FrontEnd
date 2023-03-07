import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import homePage from "./pages/home.js";
import signInPage from "./pages/signIn.js";
import signUpPage from "./pages/signUp.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" element={<homePage />} />
        <Route path="/" element={<signInPage />} />
        <Route path="/cadastro" element={<signUpPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
