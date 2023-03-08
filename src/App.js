import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/signIn.js";
import HomePage from "./pages/home.js";
// import axios from 'axios'
import SignUpPage from "./pages/signUp.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/timeline" element={<HomePage />}/>
        <Route path="/" element={<SignInPage />}/>
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
