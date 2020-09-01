import React, { Component } from 'react';
import PropType from 'prop-types';
import withClass from '../../../hoc/withClass';
import classes from './Person.module.css';
import Auxiliary from '../../../hoc/Auxiliary';
import AuthContext from '../../../context/auth-context';
//it is stateless component or presentational/dump component
// here p is small when we use it as component than only mandatory to keep capital(i.e where it gets imported)



class Person extends Component{
    // props is used to receive data from parent component
    
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
        this.pElementRef = React.createRef();
    }
    /* this way of accessing context in react 16.6+
    use static and same name contextType
    */
    static contextType = AuthContext;
    componentDidMount(){
        this.inputElementRef.current.focus();
        
        this.inputElementRef.current.classList.add('red');
        console.log(this.context.authenticated);
    }
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

    render() {
        console.log('[Person.js] rendering');
        return (
            // <div className = {classes.Person}>
            // <Fragment>
            <Auxiliary>
            
                { this.context.authenticated ? <p> Authenticated! </p>: <p>Please login</p> }
            
                <p ref = {this.pElementRef} onClick = {this.clickHandler}>I am person {this.props.name} and age {this.getAge(Math.floor(Math.random()*30))}</p>
                {this.props.children ? <div>{this.props.children}</div> : ''}
                <label>Change your name</label>
                <input
                // ref={(inputEl) => { this.inputElement = inputEl}}
                ref = {this.inputElementRef} value = {this.props.name} onChange = {this.changeHandler} type = "text"/>
            
            </Auxiliary>
            // </Fragment>
            // </div>

        )
    }
}

// propTypes is basicaly used to describe custom data type of props object 
Person.propTypes = {
    click: PropType.func,
    changed: PropType.func,
    name: PropType.string,
    idx: PropType.number

}
export default withClass(Person, classes.person);