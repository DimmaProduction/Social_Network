import React from 'react';
import { connect } from "react-redux";
import { compose } from 'redux';
import { getCurrentUsers, getUsersTC, getMoreUsers, setFollowChange, toggleBtnLoading, followTC, unFollowTC } from "../../redux/users-reducer";
import { getCurrentPage, getIdOfBtnLoading, getIsFetching, getPageSize, getPortionSize, getTotalUsersCount, getUsers } from '../../redux/users-selectors';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Users from './Users';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersTC(this.props.pageSize);
    }

    onFollowChangeClick = (e) => {
        let id = e.target.value;
        this.props.setFollowChange(id)
    }

    onMainBtnClick = () =>{
        this.props.getMoreUsers(this.props.currentPage);
    }

    render() {
        return  <Users  users={this.props.users}
                        isFetching={this.props.isFetching}
                        onFollowChangeClick={this.onFollowChangeClick}
                        onMainBtnClick={this.onMainBtnClick}  
                        setFollowChange={this.props.setFollowChange}  
                        toggleBtnLoading = {this.props.toggleBtnLoading}
                        idOfBtnLoading = {this.props.idOfBtnLoading}
                        followTC={this.props.followTC}
                        unFollowTC={this.props.unFollowTC}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        totalUsersCount={this.props.totalUsersCount}
                        getCurrentUsers={this.props.getCurrentUsers}
                        portionSize={this.props.portionSize}

        />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        idOfBtnLoading: getIdOfBtnLoading(state),
        portionSize: getPortionSize(state)
    }
}


export default compose(
    connect( mapStateToProps, { getCurrentUsers, setFollowChange, toggleBtnLoading, getUsersTC, getMoreUsers, followTC, unFollowTC }  ),
    withAuthRedirect
)(UsersContainer);