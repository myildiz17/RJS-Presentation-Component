// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: "sad",
    };
  }

  handleClicks = () => {
    if (this.state.mood === "sad") {
      this.setState({
        mood: "happy",
      });
    } else {
      this.setState({
        mood: "sad",
      });
    }
  };
  

  render() {
    return <div onClick={this.handleClicks}>{this.state.mood}</div>;
  }
}

export default SimpleComponent;
