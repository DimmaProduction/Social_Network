import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Login } from '../../redux/auth-reducer';
import { Input } from '../Helpers/FormControl/FormControl';
import { required } from '../Helpers/Validators/Validators';
import css from './Login.module.css';

let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='login' placeholder='Login'
                validate={[required]} component={Input}/>
            </div>
            <div>
                <Field name='password' placeholder="Password" type="password"
                validate={[required]} component={Input}/>
            </div>
            <div>
                <Field name='rememberMe' type="checkbox" component="input"/>Remember Me
            </div>
            { props.error && 
                <div className={css.formErrorBox}>
                    <span>{props.error}</span>
                </div>
            }
            <div >
                <button>Login</button>
            </div>
        </form>
    )
}

LoginForm = reduxForm({
    form:'loginForm'
})(LoginForm);

const LoginPage = (props) => {

    let submitUser = (data) =>{
        props.Login(data.login, data.password, data.rememberMe);
        

    }

    if (props.isAuth) return  <Redirect to='./profile'/>;

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginForm onSubmit={submitUser}/>
            {/* <button onClick={onLogoutClick}>Logout</button> */}
        </div>
    )
    
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {Login})(LoginPage);