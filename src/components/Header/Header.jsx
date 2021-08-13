import React from 'react';
import s from './Header.module.css';

const Header = (props) => {
    return (
        <header className={s.header}>
            {/* <img src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png' alt="logoImage"></img> */}
            <p className={s.headerName}>SOCIAL NETWORK</p>
            <div className={s.loginForm}> {
                props.isAuth ? <div><p>{props.login}&nbsp;&#9989;</p><button onClick={props.Logout}>Logout</button></div>
                    : <p>LOGIN</p>
            }</div>
            
            
        </header>
    );
}

export default Header;