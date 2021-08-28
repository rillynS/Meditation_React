import React from "react";
import classes from "./Card.module.css";
import CardItem from "./CardItem/CardItem";
import img1 from "../../img/img_card_1.png";
import img2 from "../../img/img_card_2.png";
import img3 from "../../img/img_card_3.png";

export default function Card(props) {
  const cards = [
    {
      id: 0,
      img: img1,
      title: "Meditation",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
      titleBtn: "Learn More",
    },
    {
      id: 1,
      img: img2,
      title: "Yoga",
      text: " It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      titleBtn: "Learn More",
    },
    {
      id: 2,
      img: img3,
      title: "Sound",
      text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing..",
      titleBtn: "Learn More",
    },
  ];
  return (
    <div className={classes.Card}>
      {cards.map((cardItem) => {
        return (
          <CardItem
            key={cardItem.id}
            img={cardItem.img}
            title={cardItem.title}
            text={cardItem.text}
            titleBtn={cardItem.titleBtn}
          />
        );
      })}
    </div>
  );
}
