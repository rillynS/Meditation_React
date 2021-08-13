import React from 'react';
import Button from '../../../hoc/Button/Button';
import classes from './CardItem.module.css';

export default function CardItem ({img, title, text, titleBtn}) {
    return(
        <div className={classes.CardItem}>
            <img src={img} alt="logo_card" />
            <h2>{title}</h2>
            <p>{text}</p>
            <Button title={titleBtn} />
        </div>
    )
}