// your ImageSlider code here!
import React, { Component } from "react";

class ImageSlider extends Component {
  state = {
    currentSlideIndex: 0
  };
  render() {
    return <span>I am on slide {this.state.currentSlideIndex}</span>;
  }
}

export default ImageSlider;
