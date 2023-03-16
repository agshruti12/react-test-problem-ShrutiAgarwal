import React from 'react';
import './App.css'


export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
        label: "Click Me"
    };

  }

  //handler goes here
  handleClick = () => {
    const newValue = (this.state.label) === "Click Me" ? "Thanks" : "Click Me";
    this.setState({ label: newValue});
  };

  render() {
    return (
      <div className='App'>
        <p>Greetings!</p>
        <button onClick={this.handleClick}> {this.state.label} </button>
      </div>
    );
  }

}