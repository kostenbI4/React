import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <Post message={'Hi, how are you?'} likeCounts={20}/>
                <Post message={'It\'s my first post'} likeCounts={15}/>
            </div>
        </div>
    );
}

export default MyPosts;