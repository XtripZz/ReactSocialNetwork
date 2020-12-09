import React from 'react';
import Posts from './Posts';
import s from './Posts.module.css';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    whoLeftThePost: state.profilePage.whoLeftThePost,
    posts: state.profilePage.posts,
  }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
