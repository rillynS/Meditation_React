import React from "react";
import Header from "./components/Header/Header";
import classes from './App.module.css';
import Main from "./components/Main/Main";

export default function App() {


  return (
    <div className={classes.App}>
      <Header />
      <Main />
    </div>
  );
}
