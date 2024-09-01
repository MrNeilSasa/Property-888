'use client'
import Carousel from 'react-bootstrap/Carousel'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import './ImageSlider.css'

const ImageSlider = ({ id }) => {
  const imageStyle = {
    height: '500px', // Set the desired height
    width: '100%', // Set the width to 100% to maintain aspect ratio
    objectFit: 'cover', // Maintain aspect ratio and cover the container
  }

  const [images, setImages] = useState([])

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Getting images for: ', id)
        const response = await axios.get(`https://www.property888.xyz/api/imageslider/${id}`)
        //const response = await axios.get(`http://localhost:3000/api/imageslider/${id}`)
        setImages(response.data.slideshow)
        console.log('Images for slider: ', response.data.slideshow)
        console.log('Images in varaible: ', images)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [id])

  return (
    <div style={{ maxWidth: '800px', margin: 'auto' }}>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={3000}>
            <Image
              className="d-block w-100"
              src={`/uploads/${image.filename}`}
              alt={`Slide ${index}`}
              style={imageStyle}
              width={700}
              height={400}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default ImageSlider
