import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.postItem}>
      {props.message}
      <div>
        <span>{props.likesCount} like</span>
      </div>
    </div>
  );
};

export default Post;
