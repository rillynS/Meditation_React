import React, { useState } from "react";
import classes from "./Practice.module.css";
import img from "../../img/girl_practice.png";
import PracticeCard from "./PracticeCard/PracticeCard";
export default function Practice() {
  const [cards, setActive] = useState([
    {
      title: "Meditation Wind",
      subtitle:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected.",
      isActiveState: true,
    },
  ]);

  function togActive(id) {
      
  }
  return (
    <div className={classes.Practice}>
      <h2>Practice Wherever You Want, Whenever You Need</h2>
      <p>
        “These cases are perfectly simple and easy to distinguish. In a free
        hour, when our power of choice is untrammelled and when nothing prevents
        our being able to do what we like best.”
      </p>
      <div className={classes.Practice_content}>
        <img src={img} alt="girl_practice" />
        <PracticeCard
          title={cards[0].title}
          subtitle={cards[0].subtitle}
          isActive={cards[0].isActiveState}
        />
      </div>
    </div>
  );
}
