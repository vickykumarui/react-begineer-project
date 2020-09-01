import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cocpit.module.css';
import AuthContext from '../../context/auth-context';
const Cockpit = (props) =>
{
  const toggleBtnRef = useRef(null);
 
  const authContext = useContext(AuthContext);

  useEffect(() =>{
    console.log('[Cocpit.js] useEffect called when person change');
  },[props.persons]);

  useEffect(() =>{
    toggleBtnRef.current.click();
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
    <button ref = {toggleBtnRef} className = {btnClass} onClick = {props.toggleNameHandler}>
    Toggle Persons
    </button>
    
      <button onClick = {authContext.login}>Login</button>
    
    </div>
)

   }

    
    


export default React.memo(Cockpit);
// mamoization is nothing but caching previous value - inthis case react will cache previous component and donot rerender the component aging if nothing change in this component