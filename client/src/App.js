import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import * as actions from './redux/actions';
import Suggestions from "./components/Suggestions/Suggestions";
import Friends from "./components/Friends/Friends";
import PostList from "./components/Posts/PostList";
import FriendsProfile from "./components/Profile/FriendsProfile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import Requests from "./components/Friends/Requests/Requests";
import ReportedList from "./components/Posts/ReportedPosts/ReportedList";
import Feed from "./components/Feed/Feed";

function App(props) {

  useEffect( () => {
    props.fetchUser();
    props.fetchSuggestedUsers();
    props.fetchPost();
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feed' element={ <Feed /> } />
        <Route path='/' element={ <Login /> } exact />
        <Route path='/profile' element= { <Profile /> } exact />
        <Route path='/suggestion' element= { <Suggestions /> } />
        <Route path='/friends' element= { <Friends /> } />
        <Route path='/profile/:id' element = { <FriendsProfile /> } />
        <Route path='/post' element = { <PostList /> } />
        <Route path='/edit' element = { <EditProfile/> } />
        <Route path='/requests' element = { <Requests /> } />
        <Route path='/reported' element = { <ReportedList /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(App);
