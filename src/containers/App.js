import React, { PureComponent } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { id: "1", name: "Max", age: 29 },
        { id: "2", name: "Mashala", age: 19 },
        { id: "3", name: "Mara", age: 9 }
      ],
      showPersons: false
    };
    console.log("[App.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount");
  }
  
  componentDidMount(){
    console.log("[App.js] Inside componentDidMount");
  }
  // shouldComponentUpdate(nextProps,  nextState) {
  //   console.log('[UPDATE App.js] inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons || 
  //   nextState.showPersons !== this.state.showPersons;
  // }

  componentWillUpdate(nextProps,  nextState) {
    console.log('[UPDATE App.js] inside componentWillUpdate', nextProps, nextState );
  }

  componentDidUpdate() {
    console.log('[UPDATE App.js] inside componentDidUpdate');
  }

  nameChangeHandler = (event, id) => {
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
    });
  };

  deletePersonsHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons
    });
  };

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({
      showPersons: !showPersons
    });
  };

  render() {
    console.log("[App.js] Inside render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonsHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
