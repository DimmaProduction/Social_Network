import React from "react";
import preloaderImg from '../../img/preloader.gif';
import css from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={css.preloaderBlock}>
            <img className={css.preloaderImg} src={preloaderImg} alt="loading.."></img>
        </div>
    )
}

export default Preloader;