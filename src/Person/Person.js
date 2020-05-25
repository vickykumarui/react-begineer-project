import React from 'react';
import './Person.css';
import Radium from 'radium';
//it is stateless component or presentational/dump component
// here p is small when we use it as component than only mandatory to keep capital(i.e where it gets imported)
const person = (props) =>{
    // props is used to receive data from parent component
    const style = {
        '@media (max-width: 767px)':{
            width: '100%'
        }
    }
    console.log(props);
    const getAge = (age) =>{
        return age;
    }

    const clickHandler = (event) =>{
        props.click(props.idx);
    }

    const changeHandler = (event) =>{
        props.changed(event, props.idx)
    }

return (
    <div className = "Person" style = {style}>
        <p onClick = {clickHandler}>I am person {props.name} and age {getAge(Math.floor(Math.random()*30))}</p>
        {props.children ? <div>{props.children}</div> : ''}
        <label>Change your name</label>
        <input value = {props.name} onChange = {changeHandler} type = "text"/>
</div>
)
}

export default Radium(person);