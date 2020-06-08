import React from 'react';
import Person from './Person/Person';

const Persons = (props) =>{
    console.log('[Person.js] rendering')
    let person
if(props.toggleName && props.persons.length){
     person =  props.persons.map((person, i) => {
        return (
          
          <Person key = {i} idx = {i} name = {person.name} click = {props.deleteNameHandler} 
              changed = {props.changeNameHandler}>
                {person.hobbies ? <div>{person.hobbies}</div> : ''}
          </Person>
         
        );
    });
   
  }

    return(
        <div>
            {person}
        </div>
    )
}

export default Persons;
