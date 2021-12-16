import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } exact />
        <Route path='/profile' element= { <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
