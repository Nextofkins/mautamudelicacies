
import React from 'react'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <div className="cta-left">
          <h4>Get more discounts on your order</h4>
          <p>Sign up for our newsletter to receive special offers and early menu drops.</p>
        </div>
        <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email" required />
          <button className="btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  )
}
