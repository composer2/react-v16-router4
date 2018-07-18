import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 29 },
      { id: '2', name: 'Mashala', age: 19 },
      { id: '3', name: 'Mara', age: 9 },
    ],
    showPersons: false
  }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons
    })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    })
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    })
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}/>
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }
    return (
      <div className={classes.App}>
        <h1 className={assignedClasses.join(' ')}>Hi Im react app</h1>
        <button
          className={btnClass} 
          onClick={this.togglePersonsHandler}>Toggle persons</button>
          {persons}
      </div>
    );
  }
}

export default App
