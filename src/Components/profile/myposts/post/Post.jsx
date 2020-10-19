import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={'https://wizardiart.com/878-large_default/autumn-shades-perfect-gift.jpg'}/>
            {props.message}
            <div>
                <span>like </span>
                {props.likeCounts}
            </div>
        </div>

    );
}

export default Post;