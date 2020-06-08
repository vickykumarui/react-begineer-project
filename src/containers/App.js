import React, { Component } from 'react';
import classes from './App.module.css';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cocpit/Cocpit';


// this is also stateful/container/smartful component



class App extends Component {
  /* state is resrved word can be used only when we make class as component (not in case of function) used to manage data inside component, special thing about starewhen there is  change in any property values of state react will rerender the component
  */
 constructor(props){
    super(props);
    console.log('[App.js] constructor');
    this.state = {
      persons: [
        {name: 'vicky', age: 28},
        {name: 'vikram', age: 30, hobbies: "My hobbies racing" },
        {name: 'vivek', age: 32},
        {name: 'manjumath', age: 29 }
      ],
      toggleName: false
    
    }
 }

 static getDerivedStateFromProps(props,state){
    console.log('[App.js] getDerivedStateFromProps',props);
    return state;
 }
  
 componentDidMount(){
   console.log('[App.js] Component did mount')
 }
  
  toggleNameHandler = () =>{
    this.setState({
      toggleName : !this.state.toggleName
    })
  }

  deleteNameHandler  = (index)=> {
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
  //  let person = null;
    console.log('[App.js] render')
    return (
     
    <div className= {classes.App}>  
    <Cockpit title = {this.props.appTitle} persons = {this.state.persons} toggleName = {this.state.toggleName} toggleNameHandler = {this.toggleNameHandler} />   
    
     <Persons toggleName = {this.state.toggleName} persons = {this.state.persons} deleteNameHandler = {this.deleteNameHandler}  changeNameHandler = {this.changeNameHandler} />
           
    </div>
   
  );
    }
  
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

