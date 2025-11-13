
import React, { useEffect, useState, useRef } from 'react'

const HERO_IMAGES = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg'
]

const FALLBACKS = [
  'https://images.unsplash.com/photo-1543352634-6b0f7e56a6ad?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1600&auto=format&fit=crop'
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 4500)
    return () => clearInterval(t)
  }, [])

  const images = HERO_IMAGES.map((p, i) => p)

  return (
    <section id="home" className="hero">
      <div className="hero-slider" ref={wrapperRef} style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map((src, i) => (
          <div className="hero-slide" key={i}>
            <img
              src={src}
              alt={`hero ${i}`}
              onError={(e) => { e.currentTarget.src = FALLBACKS[i % FALLBACKS.length] }}
            />
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>Mautamu Delicacies</h1>
                <p>5-star dining & local favorites — exquisite meals, fresh bakery, fine wines.</p>
                <div className="hero-actions">
                  <button className="btn-primary">Reserve a Table</button>
                  <button className="btn-ghost">View Menu</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-controls container">
        <div className="dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="hero-arrows">
          <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>&larr;</button>
          <button onClick={() => setIndex((index + 1) % images.length)}>&rarr;</button>
        </div>
      </div>
    </section>
  )
}
