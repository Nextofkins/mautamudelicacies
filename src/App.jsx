
import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import NewIn from './components/NewIn'
import Products from './components/Products'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.observe').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site">
      <Header />
      <main>
        <Hero />
        <Stats />
        <section className="container observe"><Services /></section>
        <section className="container observe"><NewIn /></section>
        <section className="container observe"><Products /></section>
        <section className="container observe"><Testimonials /></section>
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
