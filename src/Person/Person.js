import React from 'react';
import styled from 'styled-components';
//it is stateless component or presentational/dump component
// here p is small when we use it as component than only mandatory to keep capital(i.e where it gets imported)

const StyledDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eeeeee;
box-shadow: 0 2px 3px #cccccc;
padding: 16px;
text-align: center;
@media (max-width: 767px) {
    width: 100%;
}
`;

const person = (props) =>{
    // props is used to receive data from parent component
    // const style = {
    //     '@media (max-width: 767px)':{
    //         width: '100%'
    //     }
    // }
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
    <StyledDiv>
        <p onClick = {clickHandler}>I am person {props.name} and age {getAge(Math.floor(Math.random()*30))}</p>
        {props.children ? <div>{props.children}</div> : ''}
        <label>Change your name</label>
        <input value = {props.name} onChange = {changeHandler} type = "text"/>
    </StyledDiv>

)
}

export default person;