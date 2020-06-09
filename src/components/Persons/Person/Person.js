import React, { Component } from 'react';
import classes from './Person.module.css';

//it is stateless component or presentational/dump component
// here p is small when we use it as component than only mandatory to keep capital(i.e where it gets imported)



class person extends Component{
    // props is used to receive data from parent component
    
     getAge = (age) =>{
        return age;
    }

     clickHandler = (event) =>{
        this.props.click(this.props.idx);
    }

     changeHandler = (event) =>{
        this.props.changed(event, this.props.idx)
    }
    componentWillUnmount(){
        console.log('[Persons.js] unmount called when component is destroyed')
    }

    render(){
        console.log('[Person.js] rendering');
        return (
            <div className = {classes.Person}>
                <p onClick = {this.clickHandler}>I am person {this.props.name} and age {this.getAge(Math.floor(Math.random()*30))}</p>
                {this.props.children ? <div>{this.props.children}</div> : ''}
                <label>Change your name</label>
                <input value = {this.props.name} onChange = {this.changeHandler} type = "text"/>
            </div>

        )
    }
}

export default person;