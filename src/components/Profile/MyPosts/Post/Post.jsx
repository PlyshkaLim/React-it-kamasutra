import React from 'react';
import p from './Post.module.css';

const Post = (props) => {
    return (
        <div className={p.item}>
            <div className={p.header}>
                <img className={p.avatar} src={props.avatar}/>

                <div className={p.name}>
                    {props.name}
                </div>
            </div>

            <div className={p.message}>
                {props.message}
            </div>

            <div className={p.like_count}>
                <img className={p.like_count_icon}
                     src="https://img.icons8.com/windows/32/000000/hearts.png"/>

                {props.like_count}
            </div>
        </div>
    );
}

export default Post;