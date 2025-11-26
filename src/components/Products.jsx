import React, { useRef } from 'react'

const PRODUCTS = [
  { name: "Chef’s Special", img: 'https://images.unsplash.com/photo-1543353071-087092ec393a?q=80&w=1200&auto=format&fit=crop', price: 'KSh 1,200' },
  { name: 'Bistro Plate',    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop', price: 'KSh 3,200' },
  { name: 'Bakery Box',      img: 'https://images.unsplash.com/photo-1517686469429-8a2f7f9b50f6?q=80&w=1200&auto=format&fit=crop', price: 'KSh 900' },
  { name: 'Wine Selection',  img: 'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop', price: 'KSh 450' },
  { name: 'Dessert Set',     img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop', price: 'KSh 2,000' },
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
              <img
                src={p.img}
                alt={p.name}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1200&auto=format&fit=crop' }}
              />
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
