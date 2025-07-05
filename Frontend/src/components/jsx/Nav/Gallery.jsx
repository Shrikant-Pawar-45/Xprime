import React, { Component } from 'react'
import { db } from '../../jsx/firebase-init'
import { collection, getDocs } from 'firebase/firestore'
import * as Icon from 'react-bootstrap-icons'
import '../../css/Gallery.css'

class LoadingDiv extends Component {
  render() {
    return (<div className="loadingdiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}></div>)
  }
}

export class Gallery extends Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryData: [],
      copiedId: null,
      loading: true,
      error: null,
      imagesLoaded: {},
    }
  }

  async componentDidMount() {
    try {
      const gallerySnapshot = await getDocs(collection(db, 'gallery'))
      const galleryData = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      this.setState({ galleryData, loading: false })
    } catch (error) {
      console.error('Error fetching gallery data from Firestore:', error)
      this.setState({ error: 'Failed to load gallery data.', loading: false })
    }
  }

  handleImageLoad = (id) => {
    this.setState(prevState => ({
      imagesLoaded: { ...prevState.imagesLoaded, [id]: true }
    }))
  }

  copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedId: id })
      setTimeout(() => this.setState({ copiedId: null }), 2000)
    })
  }

  render() {
    const { galleryData, copiedId, loading, error, imagesLoaded } = this.state

    if (loading) {
      // Show multiple loading divs with shining animation
      return( 
      <div className="loadingdiv">
        <p style={{color:'yellow',fontWeight:'bold'}}>Loading..!</p>
        </div>
      )
    }

    if (error) {
      return <div>{error}</div>
    }

    if (galleryData.length === 0) {
      return <div>No gallery items found.</div>
    }

    return (
      <div className="gallery-container">
        {galleryData.map((item) => (
          <div key={item.id} className={`gallery-item ${imagesLoaded[item.id] ? '' : 'loading-shine'}`}>
            <img
              src={item.image}
              alt={item.title}
              onLoad={() => this.handleImageLoad(item.id)}
              style={{ display: imagesLoaded[item.id] ? 'block' : 'none' }}
            />
            {!imagesLoaded[item.id] && <div className="image-placeholder loading-shine"></div>}
            <div className="overlay">
              <p title={item.prompt}>{item.prompt}</p>
              <button
                className="copy-btn"
                onClick={() => this.copyToClipboard(item.prompt, item.id)}
                title="Copy prompt to clipboard"
              >
                <Icon.Clipboard2 size={20} style={{color:'white'}} />
              </button>
              {copiedId === item.id && (
                <span className="copy-feedback">Copied!</span>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Gallery
