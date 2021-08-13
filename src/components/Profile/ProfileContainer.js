import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { addNewPostActionCreator, getUsersTC, getUserStatusTC, setUserStatusTC } from "../../redux/profile-reducer";
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getAuthId, getIsAuth, getPosts, getProfile, getStatus } from '../../redux/profile-selectors';
// import s from './Profile.module.css';


class ProfileContainer extends React.Component {
    componentDidMount () {
        let userID = this.props.match.params.userID;
        if (!userID)  userID = this.props.authorizedUserId;
        this.props.getUsersTC(userID);  
        this.props.getUserStatusTC(userID);
    }

    render() {
        return <Profile posts={this.props.posts}
                        profile={this.props.profile}
                        status={this.props.status}
                        addPost={this.props.addNewPostActionCreator}
                        setUserStatus={this.props.setUserStatusTC}
                        />;
    }
}


const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        profile: getProfile(state),
        status: getStatus(state),
        authorizedUserId: getAuthId(state),
        isAuth: getIsAuth(state)
    }
  }


export default compose(
    connect(mapStateToProps, {addNewPostActionCreator, getUsersTC, getUserStatusTC, setUserStatusTC} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);