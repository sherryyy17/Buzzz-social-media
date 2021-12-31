import React from "react";
import Header from "../Header/Header";
import Suggestions from "../Suggestions/Suggestions";
import UserProfile from "./UserProfile";

const Profile = () => {
    return <>
        <Header />
        <div style={{ display:'flex', backgroundColor:'#e6e2e1', height:'100vh', padding: '2rem 4rem', justifyContent: 'space-around'}}>
            <UserProfile />
            <div style={{ height: '60%' }}>
            <Suggestions />
            </div>
        </div>
    </>
}

export default Profile;