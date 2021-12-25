import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import * as actions from './redux/actions';
import Suggestions from "./components/Suggestions/Suggestions";
import Friends from "./components/Friends/Friends";
import PostList from "./components/Posts/PostList";

function App(props) {

  useEffect( () => {
    props.fetchUser();
    props.fetchSuggestedUsers();
    props.fetchPost();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> } exact />
        <Route path='/profile' element= { <Profile /> } />
        <Route path='/suggestion' element= { <Suggestions /> } />
        <Route path='/friends' element= { <Friends /> } />
        <Route path='/post' element = { <PostList /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
