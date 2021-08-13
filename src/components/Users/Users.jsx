import React from "react";
import css from './Users.module.css';
import imageUrl from '../../img/1.png';
import Preloader from '../assets/Preloader';
import { NavLink } from "react-router-dom";
import Paginator from '../Helpers/Paginator/Paginator';

const Users = (props) => {

    let follow = (e) => {
        let id = e.target.value;
        props.followTC(id);
    }

    let unFollow = (e) => {
        let id = e.target.value;
        props.unFollowTC(id);
    }

    return  (
        <div>
            <h2 className={css.name}>Users:</h2>
            {
                
                props.users.map( (u) => 
                    <div className={css.userContainer}>
                        <div className={css.userAvatar}>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={css.userAvatarImage} src={u.photos.small === null? imageUrl : u.photos.small} alt='ava'></img>                                
                                </NavLink>
                            
                                {   
                                    u.followed? 
                                    <button disabled={props.idOfBtnLoading.some( id => id === u.id)} className={css.userAvatarBtn} 
                                    onClick={ unFollow } value={u.id} >Not follow</button>
                                    : 
                                    <button disabled={props.idOfBtnLoading.some( id => id === u.id)} className={css.userAvatarBtn} 
                                    onClick={ follow } value={u.id} >Follow</button>
                                }   

                        </div>
                        <div className={css.userInfo}>
                            <div className={css.userInfoLeft}>
                                <p className={css.textBold}>{u.name}</p>
                                <p className={css.textCasual}>{u.status === null? 'NO STATUS' : u.status}</p>
                            </div>
                            <div className={css.userInfoRight}>
                                <p className={css.textBold}>Ukraine</p> 
                                <p className={css.textBold}>Kyiv</p>
                                {/* <p className={css.textBold}>{u.location.country}</p> */}
                                {/* <p className={css.textBold}>{u.location.city}</p> */}
                            </div>
                        </div>
                    </div>
                )
                
            }

            { props.isFetching && 
                <Preloader/>
            }
            
            <div className={css.mainBtnBlock}>
                <button className={css.mainBtn}  onClick={props.onMainBtnClick} >Show more</button>
            </div>

            <div>
                <Paginator  pageSize={props.pageSize}
                            currentPage={props.currentPage}
                            totalUsersCount={props.totalUsersCount}
                            getCurrentUsers={props.getCurrentUsers}
                            portionSize={props.portionSize}
                            />
            </div>

        </div>
    )
}



export default Users;