import React from 'react';
/*
There are two ways of creating HOC
1. Create a functional component that simply renders cihldren within div
*/

// const withClass = props => (<div className= {props.classes}> {props.children} </div>);

// export default withClass

/*
2. Another way of creating higher order component
    Creat simple js function which can take n number of arguments
    This js function returns a functional component
*/

const withClass = (WrappedComponent, className) =>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default withClass