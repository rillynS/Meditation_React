import React from 'react';
import Button from '../../hoc/Button/Button';
import Wrapper from "../../hoc/Wrapper/Wrapper";
import classes from './Main.module.css';
import GirlImg from '../../img/girl_main.png';
export default function Main (props) {
    return(
        <div className={classes.Main}>
            <Wrapper>
                <h1>Meditations Helps You Detoxify Your Body</h1>
                <p>“It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout point of using Lorem Ipsum is that it has a more-or-less.”</p>
                <Button title='Get started' style={{padding:'19px 89px'}}/>
                <img src={GirlImg}alt='girl_main_img'/>
            </Wrapper>
        </div>
    )
}