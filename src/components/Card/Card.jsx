import React from "react";
import classes from "./Card.module.css";
import CardItem from "./CardItem/CardItem";
import img1 from '../../img/img_card_1.png';


export default function Card(props) {
    const cards = 
        {img:img1, title:'Meditation', text:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.', titleBtn:'Learn More'}
    
  return (
    <div>
        <CardItem
            img={cards.img}
            title={cards.title}
            text={cards.text}
            titleBtn={cards.titleBtn}
        />
    </div>
  );
}
