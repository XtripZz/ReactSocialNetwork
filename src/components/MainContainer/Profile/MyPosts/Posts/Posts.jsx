import React from 'react';
import Post from "./Post/Post";
import WhoLeftThePost from "./WhoLeftThePost/WhoLeftThePost";
import s from './Posts.module.css';

const Posts = (props) => {

  let whoLeftThePostElements =
    props.whoLeftThePost.map(w => <WhoLeftThePost id={w.id} name={w.name} key={w.id}/>)
  let postsElements =
    props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount} key={p.id}/>);

  return (
    <div className={s.posts}>
      <div className={s.whoLefts}>
          {whoLeftThePostElements}
        </div>

        <div className={s.postsMessages}>
          {postsElements}
        </div>
      {props.posts.length}
    </div>
  );
};

export default Posts;
