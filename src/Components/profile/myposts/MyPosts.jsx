import React from 'react';
import s from './MyPosts.module.css'
import Post from "./post/Post";

const createArr = function (el) {
    let arra = el.map((e) => <Post message={e.message} likeCounts={e.likeCounts}/>);
    /*for (let a of el){
        arra.push(<Post message={a.message} likeCounts={a.likeCounts}/>)
    }*/
    return arra;
}

const MyPosts = (props) => {
    let addPost = () => {
        debugger;
        let text = newPostElement.current.value;
        alert(text);
    }

    let newPostElement = React.createRef(); //создаем ссылку

    return (
        <div className={s.postsBlog}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <hr/>
            </div>
            <div className={s.posts}>
                {createArr(props.posts)}
            </div>
        </div>
    );
}

export default MyPosts;