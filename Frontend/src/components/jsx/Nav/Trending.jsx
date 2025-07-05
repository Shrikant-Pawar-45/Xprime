import React, { Component } from 'react'
import { db } from '../../jsx/firebase-init'
import { collection, getDocs } from 'firebase/firestore'
import * as Icon from 'react-bootstrap-icons'
import '../../css/Gallery.css'

export class Trending extends Component {
  constructor(props) {
    super(props)
    this.state = {
      trendingData: [],
      copiedId: null,
      loading: true,
      error: null,
    }
  }

  async componentDidMount() {
    try {
      const trendingSnapshot = await getDocs(collection(db, 'trending'))
      const trendingData = trendingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      this.setState({ trendingData, loading: false })
    } catch (error) {
      console.error('Error fetching trending data from Firestore:', error)
      this.setState({ error: 'Failed to load trending data.', loading: false })
    }
  }

  copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      this.setState({ copiedId: id })
      setTimeout(() => this.setState({ copiedId: null }), 2000)
    })
  }

  render() {
    const { trendingData, copiedId, loading, error } = this.state

    if (loading) {
      return (
      <div className="loadingdiv">
        <p style={{color:'yellow',fontWeight:'bold'}}>Loading..!</p>
        </div>
        )
      
    }

    if (error) {
      return <div>{error}</div>
    }

    if (trendingData.length === 0) {
      return <div>No trending items found.</div>
    }

    return (
      <div className="gallery-container">
        {trendingData.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.title} />
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

export default Trending
