
import React from 'react'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">Mautamu Delicacies</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </nav>
        <button className="mobile-menu" aria-label="Open menu">☰</button>
      </div>
    </header>
  )
}
