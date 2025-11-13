
import React from 'react'

const TEST = [
  {
    name: 'Jane W.',
    text: 'Perfect combination of classy dining and homey flavors. The bakery is top notch.',
    img: '/images/testimonial1.jpg'
  },
  {
    name: 'Samuel K.',
    text: 'Affordable local plates that taste like home. Highly recommended!',
    img: '/images/testimonial2.jpg'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <h3>What People Are Saying</h3>
      <div className="test-grid">
        {TEST.map((t, i) => (
          <div className="test-card" key={i}>
            <div className="test-meta">
              <img src={t.img} alt={t.name} onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop'}}/>
              <div>
                <div className="test-name">{t.name}</div>
                <div className="test-role">Guest</div>
              </div>
            </div>
            <p className="test-text">"{t.text}"</p>
          </div>
        ))}
        <div className="test-image">
          <img src="/images/product1.jpg" alt="restaurant interior" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'}}/>
        </div>
      </div>
    </section>
  )
}
