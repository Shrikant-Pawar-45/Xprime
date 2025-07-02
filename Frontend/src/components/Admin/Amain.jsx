import React, { Component } from 'react'
import './Amain.css'

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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
        const updatedGalleryData = [...galleryData, newGalleryItem]
        this.setState({
          galleryData: updatedGalleryData,
          galleryImageUrl: '',
          galleryTitle: '',
          galleryPrompt: '',
        })
        // Send updated gallery data to backend to save in galleryData.json
        fetch('http://localhost:8080/api/admin/gallery', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedGalleryData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to save gallery data to backend')
            }
            return response.text()
          })
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            alert(error.message)
          })
        alert('Gallery data saved to backend successfully')
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
        const updatedTrendingData = [...trendingData, newTrendingItem]
        this.setState({
          trendingData: updatedTrendingData,
          trendingImageUrl: '',
          trendingTitle: '',
          trendingPrompt: '',
        })
        // Send updated trending data to backend to save in trendingData.json
        fetch('http://localhost:8080/api/admin/trending', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedTrendingData),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Failed to save trending data to backend')
            }
            return response.text()
          })
          .then((data) => {
            console.log(data)
          })
          .catch((error) => {
            alert(error.message)
          })
        alert('Trending data saved to backend successfully')
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
                  <strong>{item.title}</strong> - {item.prompt} - <img src={item.imageUrl} alt={item.title} width="100" />
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
                  <strong>{item.title}</strong> - {item.prompt} - <img src={item.imageUrl} alt={item.title} width="100" />
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
