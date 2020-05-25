import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Styled from 'styled-components';


// this is also stateful/container/smartful component

// class based component

const StyledButton = Styled.button`
background-color: ${ (props) => props.toggled ? 'red' : 'green'};
border: 1px solid red;
padding: 8px;
cursor: pointer;
&:hover {
  background-color: ${ (props) => props.toggled ? 'darkred' : 'lightgreen'};
  color: black;
}

`

class App extends Component {
  /* state is resrved word can be used only when we make class as component (not in case of function) used to manage data inside component, special thing about starewhen there is  change in any property values of state react will rerender the component
  */
  state = {
    persons: [
      {name: 'vicky', age: 28},
      {name: 'vikram', age: 30, hobbies: "My hobbies racing" },
      {name: 'vivek', age: 32},
      {name: 'manjumath', age: 29 }
    ],
    toggleName: false
  
  }
  
  toggleNameHandler = () =>{
    this.setState({
      toggleName : !this.state.toggleName
    })
  }

  deleteNameHandler  = (index)=> {
    console.log(this)
    
    const indexToBeUpdated = index || index === 0 ? index : 2;
 
   const newPersonArr = [...this.state.persons];
   newPersonArr.splice(indexToBeUpdated,1);
  
    this.setState({ persons : newPersonArr })
  }

  changeNameHandler = (event, idx) =>{
    const indexToBeUpdated = idx || 0;
    const newPersonArr = [...this.state.persons]; // this way we should copy array not hold reference
    newPersonArr[indexToBeUpdated].name = event.target.value ;
    this.setState({ persons : newPersonArr })
  }
  // we can either return jsx or create element using react.createElement
  render() {
    // const btnStyle = {
    //   backgroundColor: 'red',
    //   border: '1px solid red',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover':{
    //     backgroundColor: 'darkred',
    //     color: 'black'
    //   }
    // }

    
    let person = null;
    // const person = [];
    // if(this.state.toggleName){
    //   for(let i = 0; i< this.state.persons.length - 1; i++){
    //     person.push(
    //     <Person key={i} idx = {i} name = {this.state.persons[i].name} click = {this.deleteNameHandler} 
    //     changed = {this.changeNameHandler}>
    //       {this.state.persons[i].hobbies ? <div>{this.state.persons[i].hobbies}</div> : ''}
    //       </Person>
    //       )
    //   }
    // }
    if(this.state.toggleName && this.state.persons.length){
    person =  this.state.persons.map((person, i) => {
        return (
          <Person key={i} idx = {i} name = {person.name} click = {this.deleteNameHandler} 
              changed = {this.changeNameHandler}>
                {person.hobbies ? <div>{person.hobbies}</div> : ''}
          </Person>
        );
    });
    // btnStyle.backgroundColor = 'green';
    // btnStyle[':hover'] = {
    //   backgroundColor: 'lightgreen',
    //   color: 'black'
    // }
  }

  let pClass = '';
  if(this.state.persons.length > 2){
    pClass = pClass + 'bold red';
  } else if( this.state.persons.length > 1 && this.state.persons.length <= 2) {
    pClass = 'red';
  } else {
    pClass = '';
  }
   
    return (
     
    <div className="App">     
     <h1>Hi I am react App</h1>
     <p className = {pClass}>This is relly working</p>
     <StyledButton toggled = {this.state.toggleName} onClick = {this.toggleNameHandler}>
     Toggle Persons
     </StyledButton>
     { person }
       
     { this.state.toggleName && this.state.persons.length ?
     <Person key = {this.state.persons.length -1} idx = {this.state.persons.length -1} name = {this.state.persons[this.state.persons.length -1].name} click = {this.deleteNameHandler} changed = {this.changeNameHandler}></Person>
     : ''
  }
    
    </div>
   
  );
    }
  // Above code is equivalent to
 // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'Hi i am react element'));
}

export default App;




// // functional component

// // we use useState react hooks to use state in functional component

// const App = (props) => {
 
//   const [personsState, updatePersonState] = useState({
//     persons: [
//       {name: 'vicky', age: 28},
//       {name: 'vikram', age: 30, hobbies: "My hobbies racing" },
//       {name: 'vivek', age: 32},
//       {name: 'manjumath', age: 29 }
//     ]
//   });

//   const switchNameHandler  = ()=> {
//     console.log(this)
//     const newPersonArr = personsState.persons;
//     newPersonArr[2].name = "vikrant";
//     updatePersonState({ persons : newPersonArr })
//   }
  
 

//     const person = [];
//     for(let i = 0; i< personsState.persons.length; i++){
//       person.push(
//       <Person key={i} name = {personsState.persons[i].name}>
//         {personsState.persons[i].hobbies ? <div>{personsState.persons[i].hobbies}</div> : ''}
//         </Person>
//         )
//     }
//     console.log(person);
//     return (
//     <div className="App">     
//      <h1>Hi I am react App</h1>
//      <p>This is relly working</p>
//      <button onClick = {switchNameHandler}>Switch Name</button>
//      {person}
    
//     </div>
//   );
 
    
// }

// export default App;

