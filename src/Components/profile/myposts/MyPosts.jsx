import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";

const createArr = function (el){
    let arra = el.map((e)=><Post message={e.message} likeCounts={e.likeCounts}/>);
    /*for (let a of el){
        arra.push(<Post message={a.message} likeCounts={a.likeCounts}/>)
    }*/
    return arra;
}

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi, how are you?", likeCounts:20},
        {id: 2, message: "It\'s my first post", likeCounts:12},
        {id: 3, message: "Igor", likeCounts:20}
    ];

    return (
        <div className={s.postsBlog}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <hr/>
            </div>
            <div className={s.posts}>
                {createArr(postsData)}
            </div>
        </div>
    );
}

export default MyPosts;