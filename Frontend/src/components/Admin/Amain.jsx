import React, { Component } from 'react'
import './Amain.css'
import { db } from '../jsx/firebase-init'
import { collection, addDoc, getDocs } from 'firebase/firestore'

export class Amain extends Component {
  constructor(props) {
    super(props)
    this.state = {
      galleryImageUrl: '',
      galleryTitle: '',
      galleryPrompt: '',
      trendingImageUrl: '',
      trendingTitle: '',
      trendingPrompt: '',
      galleryData: [],
      trendingData: [],
    }
  }

  componentDidMount = async () => {
    try {
      // Fetch gallery data from Firestore
      const gallerySnapshot = await getDocs(collection(db, 'gallery'))
      const galleryData = gallerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

      // Fetch trending data from Firestore
      const trendingSnapshot = await getDocs(collection(db, 'trending'))
      const trendingData = trendingSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

      this.setState({ galleryData, trendingData })
    } catch (error) {
      console.error('Error fetching data from Firestore:', error)
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addGalleryItemToFirestore = async (item) => {
    try {
      await addDoc(collection(db, 'gallery'), item)
    } catch (error) {
      console.error('Error adding gallery item to Firestore:', error)
      throw error
    }
  }

  addTrendingItemToFirestore = async (item) => {
    try {
      await addDoc(collection(db, 'trending'), item)
    } catch (error) {
      console.error('Error adding trending item to Firestore:', error)
      throw error
    }
  }

  handleSubmit = async (section) => {
    const {
      galleryImageUrl,
      galleryTitle,
      galleryPrompt,
      trendingImageUrl,
      trendingTitle,
      trendingPrompt,
      galleryData,
      trendingData,
    } = this.state

    if (section === 'gallery') {
      const newGalleryItem = {
        image: galleryImageUrl,
        title: galleryTitle,
        prompt: galleryPrompt,
      }
      try {
        // Add to Firestore
        await this.addGalleryItemToFirestore(newGalleryItem)

        const updatedGalleryData = [...galleryData, newGalleryItem]
        this.setState({
          galleryData: updatedGalleryData,
          galleryImageUrl: '',
          galleryTitle: '',
          galleryPrompt: '',
        })

        alert('Gallery data saved to backend and Firestore successfully')
      } catch (error) {
        alert('Error saving gallery data: ' + error.message)
      }
    } else if (section === 'trending') {
      const newTrendingItem = {
        image: trendingImageUrl,
        title: trendingTitle,
        prompt: trendingPrompt,
      }
      try {
        // Add to Firestore
        await this.addTrendingItemToFirestore(newTrendingItem)

        const updatedTrendingData = [...trendingData, newTrendingItem]
        this.setState({
          trendingData: updatedTrendingData,
          trendingImageUrl: '',
          trendingTitle: '',
          trendingPrompt: '',
        })

        alert('Trending data saved to backend and Firestore successfully')
      } catch (error) {
        alert('Error saving trending data: ' + error.message)
      }
    }
  }

  render() {
    const {
      galleryImageUrl,
      galleryTitle,
      galleryPrompt,
      trendingImageUrl,
      trendingTitle,
      trendingPrompt,
      galleryData,
      trendingData,
    } = this.state

    return (
      <div className="admin-panel">
        <h2>Admin Panel</h2>
          <div className="container">
            <section className="admin-section">
          <h3>Gallery</h3>
          <input
            type="text"
            name="galleryImageUrl"
            placeholder="Image URL"
            value={galleryImageUrl}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="galleryTitle"
            placeholder="Title"
            value={galleryTitle}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="galleryPrompt"
            placeholder="Prompt"
            value={galleryPrompt}
            onChange={this.handleChange}
          />
          <button onClick={() => this.handleSubmit('gallery')}>Submit</button>
          {/* <div>
            <h4>Stored Gallery Data:</h4>
            <ul>
              {galleryData.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> - {item.prompt} - <img src={item.image} alt={item.title} width="100" />
                </li>
              ))}
            </ul>
          </div> */}
        </section>

        <section className="admin-section">
          <h3>Trending</h3>
          <input
            type="text"
            name="trendingImageUrl"
            placeholder="Image URL"
            value={trendingImageUrl}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="trendingTitle"
            placeholder="Title"
            value={trendingTitle}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="trendingPrompt"
            placeholder="Prompt"
            value={trendingPrompt}
            onChange={this.handleChange}
          />
          <button onClick={() => this.handleSubmit('trending')}>Submit</button>
          {/* <div>
            <h4>Stored Trending Data:</h4>
            <ul>
              {trendingData.map((item, index) => (
                <li key={index}>
                  <strong>{item.title}</strong> - {item.prompt} - <img src={item.image} alt={item.title} width="100" />
                </li>
              ))}
            </ul>
          </div> */}
        </section>
          </div>

      </div>
    )
  }
}

export default Amain
