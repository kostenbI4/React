import React from 'react';
import MyPosts from "./myposts/MyPosts";
import ProfileInfo from "./profileinfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            < MyPosts posts={props.state.posts}/>
        </div>
    );
}

export default Profile;