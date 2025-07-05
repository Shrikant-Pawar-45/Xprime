import React, { Component } from 'react'
import video from './assets/vid/istockphoto-2218021206-640_adpp_is.mp4'
export class Videobg extends Component {
  render() {
    return (
      <div>
        <video src={video} autoPlay loop muted className="videobg"/>
      </div>
    )
  }
}

export default Videobg
