
import React from 'react'

const CARDS = [
  { title: 'Signature Platter', img: '/images/product2.jpg' },
  { title: 'Sourdough Loaf', img: '/images/product3.jpg' },
  { title: 'Local Stew', img: '/images/product4.jpg' },
  { title: 'Dessert Set', img: '/images/product5.jpg' },
]

export default function NewIn() {
  return (
    <section className="new-in">
      <h3>New On The Menu</h3>
      <div className="card-row">
        {CARDS.map((c, i) => (
          <div key={i} className="card">
            <div className="card-image">
              <img src={c.img} alt={c.title} onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'}}/>
            </div>
            <div className="card-title">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
