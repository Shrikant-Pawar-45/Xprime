import React, { Component } from 'react'
import galleryData from '../../../assets/galleryData.json'
import * as Icon from 'react-bootstrap-icons'
import '../../css/Gallery.css'

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copiedId: null,
      loadedImages: {}, // Track loaded images by id
    }
  }

  copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedId: id })
      setTimeout(() => this.setState({ copiedId: null }), 2000)
    })
  }

  handleImageLoad = (id) => {
    this.setState((prev) => ({
      loadedImages: { ...prev.loadedImages, [id]: true }
    }))
  }

  render() {
    return (
      <>
      <div className="gallery-container">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-item">
            {!this.state.loadedImages[item.id] && (
              <div className="gallery-spinner">
                <Icon.ArrowRepeat className="spinner-icon" size={32} />
              </div>
            )}
            <img
              src={item.image}
              alt={item.title}
              style={{ display: this.state.loadedImages[item.id] ? 'block' : 'none' }}
              onLoad={() => this.handleImageLoad(item.id)}
            />
            <div className="overlay">
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

export default Gallery