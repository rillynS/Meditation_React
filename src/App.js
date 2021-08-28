import React from "react";
import Header from "./components/Header/Header";
import classes from './App.module.css';
import Main from "./components/Main/Main";
import Card from "./components/Card/Card";
import Practice from "./components/Practice/Practice";

export default function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Main />
      <Card/>
      <Practice/>  
    </div>
  );
}
