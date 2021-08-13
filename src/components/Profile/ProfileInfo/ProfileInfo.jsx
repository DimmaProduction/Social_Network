import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../assets/Preloader';
import defaultAva from '../../../img/1.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    
        if (!props.profile) return ( <Preloader/>)
        return (
            <div className={s.content}>
                {/* <div className={s.mainImage}>
                    <img src='https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300' alt="profileInfoImg" ></img>
                </div> */}
                <div className={s.profileBlock}>
                    <img src={!props.profile.photos.large? defaultAva : props.profile.photos.large} alt="profileInfoImg"  className={s.ava}></img>
                    <div className={s.descriptionBlock}>
                        <h2 className={s.fullNameBlock}>{props.profile.fullName}</h2>
                        <ProfileStatusWithHooks status={props.status} setUserStatus={props.setUserStatus}/>
                        <span className={s.aboutBlock}>{props.profile.aboutMe}</span> 
                    </div>
                </div>
            </div>
        );
    
    
}

export default ProfileInfo;