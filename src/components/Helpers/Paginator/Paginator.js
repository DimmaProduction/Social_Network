import React, { useState } from 'react';
import css from './Paginator.module.css';

const Paginator = ({ totalUsersCount, pageSize, currentPage, portionSize, ...props }) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let PortionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    console.log("PortionCount - " + PortionCount);
    debugger;

    let lefPortionPageNumber = ((portionNumber - 1) * portionSize) + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (

        <div className={css.pageBlock}>
            <div className={css.pageBlockWithButtons}>

                {portionNumber > 1 &&
                    <button className={css.navButtonLeft} onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

                <div className={css.lineOfPage}>
                    {
                        pages
                            .filter(p => p >= lefPortionPageNumber && p <= rightPortionPageNumber)
                            .map(p => {
                                return <span className={currentPage === p && css.selectedPage}
                                    onClick={() => { props.getCurrentUsers(p) }}>{p + " "}</span>
                            })
                    }
                </div>

                {portionNumber < PortionCount &&
                    <button className={css.navButtonRight} onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
            </div>

        </div>
    );
}

export default Paginator;