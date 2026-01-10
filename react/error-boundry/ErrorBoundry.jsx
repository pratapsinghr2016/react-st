import React from "react";

class ErrorBoundry extends React.Component{
  constructor(props){
    super(props);
    this.state = {hasError: false, error: null}
  }


  // ! its a static function
  static getDerivedStateFromError(error){
    
    // this.state = {hasError: true, error}
    // ! it returns the error
    return {hasError: true, error}
  }

  // ! it has 2 args
  componentDidCatch(error, errorInfo){
    // here we can write sentry call for error log
    console.log("error:", error)
    console.log("error-info:", errorInfo)
  }


  render(){
    
    if(this.state.hasError)
      return <h2>Error Boundry</h2>

     return this.props.children
  }
 
}

export default ErrorBoundry