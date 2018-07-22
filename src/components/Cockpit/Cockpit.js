import React from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  let assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div>
      <h1>{props.appTitle}</h1>
      <h1 className={assignedClasses.join(" ")}>Hi Im react app</h1>
      <button className={btnClass} onClick={props.clicked}>
        Toggle persons
      </button>
    </div>
  );
};

export default cockpit;
