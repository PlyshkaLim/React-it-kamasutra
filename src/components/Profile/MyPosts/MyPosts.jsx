import React from 'react';
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.post}
                                   like_count={p.like_count}
                                   avatar={p.avatar}
                                   name={p.name}/>);

    let newPostElement = React.createRef();

    return (<div>
        <h3>My posts</h3>
        <div>
            <textarea onChange={props.updateNewPostText}
                      // onChange={ () => {console.log('post changed')}}
                      ref={newPostElement}
                      value={props.newPostText}/>

            <button onClick={props.addPost}>
                Add post
            </button>
        </div>
        <div className={p.posts}>
            {postsElements}
        </div>
    </div>);
}

export default MyPosts;