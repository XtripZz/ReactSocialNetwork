import React from "react";
import WriteAPostContainer from './WriteAPost/WriteAPostContainer';
import PostsContainer from './Posts/PostsContainer';
import s from "./MyPosts.module.css";

const MyPosts = React.memo((props) => {

    return (
        <div className={s.postBlock}>
            <WriteAPostContainer/>
            <PostsContainer/>
        </div>
    );
})

export default MyPosts;
