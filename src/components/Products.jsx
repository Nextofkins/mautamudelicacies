
import React, { useRef } from 'react'

const PRODUCTS = [
  { name: 'Chef’s Special', img: '/images/product2.jpg', price: 'KSh 1,200' },
  { name: 'Bistro Plate', img: '/images/product3.jpg', price: 'KSh 3,200' },
  { name: 'Bakery Box', img: '/images/product4.jpg', price: 'KSh 900' },
  { name: 'Wine Selection', img: '/images/product5.jpg', price: 'KSh 450' },
  { name: 'Dessert Set', img: '/images/product1.jpg', price: 'KSh 2,000' },
]

export default function Products() {
  const ref = useRef(null)

  const scroll = (dir = 'right') => {
    if (!ref.current) return
    const width = ref.current.clientWidth
    ref.current.scrollBy({ left: dir === 'right' ? width * 0.7 : -width * 0.7, behavior: 'smooth' })
  }

  return (
    <section className="products">
      <div className="products-header">
        <h3>All Products</h3>
        <div className="products-controls">
          <button onClick={() => scroll('left')} aria-label="Scroll left">&larr;</button>
          <button onClick={() => scroll('right')} aria-label="Scroll right">&rarr;</button>
        </div>
      </div>
      <div className="products-list" ref={ref}>
        {PRODUCTS.map((p, i) => (
          <div className="product-card" key={i}>
            <div className="product-image">
              <img src={p.img} alt={p.name} onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'}}/>
            </div>
            <div className="product-info">
              <div className="product-name">{p.name}</div>
              <div className="product-price">{p.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
