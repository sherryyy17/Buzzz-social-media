import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import * as actions from './redux/actions';

function App(props) {

  useEffect( () => {
    props.fetchUser();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } exact />
        <Route path='/profile' element= { <Profile /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
