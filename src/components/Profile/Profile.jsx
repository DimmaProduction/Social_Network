import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} setUserStatus={props.setUserStatus}/>
            <MyPosts    posts={props.posts}
                        newPostText={props.newPostText}
                        addPost={props.addPost}
                        updateNewPost={props.updateNewPost}/>
        </div>
    );
}

export default Profile;