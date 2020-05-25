import React, { Component } from 'react';

class ErrorBoundary extends Component{
    state = {
        hasError: false,
        errorMessage: ''
    }
    componentDidCatch = (error, info) =>{
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }
    render(){
        if(this.hasError){
            return <div>{this.errorMessage}</div>
        }
        return this.props.children;
    }
}

export default ErrorBoundary