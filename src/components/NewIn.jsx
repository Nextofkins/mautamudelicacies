import React from 'react'

const CARDS = [
  { title: 'Signature Platter', img: 'https://images.unsplash.com/photo-1541542684-6c02b1df5c6b?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Sourdough Loaf',     img: 'https://images.unsplash.com/photo-1542827639-2f6d351ff46e?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Local Stew',         img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop' },
  { title: 'Dessert Set',        img: 'https://images.unsplash.com/photo-1542827639-3f3bd8f35f3a?q=80&w=1200&auto=format&fit=crop' },
]

export default function NewIn() {
  return (
    <section className="new-in">
      <h3>New On The Menu</h3>
      <div className="card-row">
        {CARDS.map((c, i) => (
          <div key={i} className="card">
            <div className="card-image">
              <img
                src={c.img}
                alt={c.title}
  
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop' }}
              />
            </div>
            <div className="card-title">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
