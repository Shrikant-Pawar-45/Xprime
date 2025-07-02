import React, { Component } from 'react'
import trendingData from '../../../assets/trendingData.json'
import * as Icon from 'react-bootstrap-icons'
import '../../css/Gallery.css'

export class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copiedId: null,
    }
  }

  copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedId: id })
      setTimeout(() => this.setState({ copiedId: null }), 2000)
    })
  }

  render() {
    return (
      <>
      <div className="gallery-container">
        {trendingData.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              {/* <h3 title={item.title}>{item.title}</h3> */}
              <p title={item.prompt}>{item.prompt}</p>
              <button
                className="copy-btn"
                onClick={() => this.copyToClipboard(item.prompt, item.id)}
                title="Copy prompt to clipboard"
              >
                 <Icon.Clipboard2 size={20} style={{color:'white'}} />
              </button>
              {this.state.copiedId === item.id && (
                <span className="copy-feedback">Copied!</span>
              )}
            </div>
          </div>
        ))}
      </div>
      </>
    )
  }
}

export default Trending
