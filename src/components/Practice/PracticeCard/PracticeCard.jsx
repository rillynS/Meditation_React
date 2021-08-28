import React from 'react';
import classes from './PracticeCard.module.css';
import arrow from '../../../img/arrow.png';

export default function PracticeCard ({title,subtitle,isActive}) {
    return(
        <div className={classes.PracticeCard}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {
                isActive?<img src={arrow} alt="" />:null
            }
        </div>
    )
}