import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps', state);
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    if(nextProps.persons !== this.props.persons){
    return true; // it should return true or false based on if we want to update it or not
    } else{
      return false;
    }
    // we can add logic to restrict update for performance
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('[Persons.js] getSnapshotBeforeUpdate ', prevProps, prevState);
      return {snapshotMessage: "this is snapshot of before update"};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }
    render() {
      let person;

      if(this.props.persons.length){
         person =  this.props.persons.map((person, i) => {
            return (
              
              <Person key = {i} idx = {i} name = {person.name} click = {this.props.deleteNameHandler} 
                  changed = {this.props.changeNameHandler}>
                    {person.hobbies ? <div>{person.hobbies}</div> : ''}
              </Person>
             
            );
        });
       
      }
      console.log('[Person.js] rendering')
      return(
        <div>
            {person}
        </div>
      )
      }
}

export default Persons;
