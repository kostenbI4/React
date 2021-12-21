import React from "react";
import s from './Friend.module.css';

const Friend = (props)=>{
    return (
      <div >
          <div className={s.imageDiv}>
              <img src={props.avatar}/>
          </div>
          <div className={s.name}>
              {props.name}
          </div>
      </div>
    );
}

export default Friend