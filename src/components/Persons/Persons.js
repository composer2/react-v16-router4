import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  constructor(props) {
    super(props);
    this.lastPersonRef = React.createRef();
    console.log("[Persons.js] Inside Constructor", props);
  }
  
  componentDidMount(){
    console.log("[Persons.js] Inside componentDidMount");
    this.lastPersonRef.current.focus();
  }

  // shouldComponentUpdate(nextProps,  nextState) {
  //   console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState );
  //   return nextProps.props !== this.props.persons || 
  //   nextProps.changed !== this.props.changed ||
  //   nextProps.clicked !== this.props.clicked;
  // }


  componentDidUpdate() {
    console.log('[UPDATE Persons.js] inside componentDidUpdate');
  }
  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          position={index}
          ref={this.lastPersonRef}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
