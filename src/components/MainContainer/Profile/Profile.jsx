import React from "react";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfoContainer/>
      <MyPosts/>
    </div>
  );
};

export default Profile;
