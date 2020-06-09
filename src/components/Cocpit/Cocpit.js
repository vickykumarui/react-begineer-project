import React, {useEffect} from 'react';
import classes from './Cocpit.module.css';
const Cockpit = (props) =>
{
  useEffect(() =>{
    console.log('[Cocpit.js] useEffect called when person change');
  },[props.persons]);

  useEffect(() =>{
    console.log('[Cocpit.js] useEffect called only once');
    return () =>{
      console.log('[cocpit.js] cleanup work')
    }
  },[])
    let btnClass = classes.Button;


    let pClass = '';
    if(props.persons.length > 2){
      pClass = pClass + classes.bold + ' ' + classes.red;
    } else if( props.persons.length > 1 && props.persons.length <= 2) {
      pClass = classes.red;
    } else {
      pClass = '';
    }
    if(props.toggleName && props.persons.length){
    btnClass = btnClass + ' ' + classes.Active;
    }

   return ( <div> 
    <h1>{props.title}</h1>
    <p className = {pClass}>This is relly working</p>
    <button className = {btnClass} onClick = {props.toggleNameHandler}>
    Toggle Persons
    </button>
    </div>
)

   }

    
    


export default Cockpit;