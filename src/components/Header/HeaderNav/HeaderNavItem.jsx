import React from 'react';
import classes from '../Header.module.css';
export default function HeaderNavItem ({title,isActive,onClickActive}) {
    const cls=[]
    if(isActive) {
        cls.push(classes.active)
    }
    // console.log(onClickActive);
    return( 
        <>
            <li 
                className={cls.join(' ')}
                onClick={onClickActive}
            >
                {title}
                {isActive ? <div className={classes.underline}/> : null}
                
            </li>
        </>
    )
}