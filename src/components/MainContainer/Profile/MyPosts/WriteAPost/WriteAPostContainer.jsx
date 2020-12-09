import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../../../redux/profile-reducer";
import WriteAPost from "./WriteAPost";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {}
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostBody) => {
      let action = addPostCreator(newPostBody);
      dispatch(action);
    },
  }
}


const WriteAPostContainer = connect(mapStateToProps, mapDispatchToProps)(WriteAPost);

export default WriteAPostContainer;
