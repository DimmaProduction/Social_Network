import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

//
//      KISS MY BLONDE 😘
//

export const withAuthRedirect = ( Component ) => {

    class RedirectComponent extends React.Component{
        render (){
            if(!this.props.isAuth) return <Redirect to='./login'/>

            return <Component {...this.props} />;
        }
    }
 
    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}
