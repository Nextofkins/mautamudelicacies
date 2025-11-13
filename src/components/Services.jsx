
import React from 'react'

export default function Services() {
  return (
    <div className="services">
      <div className="services-left">
        <img src="/images/product1.jpg" alt="cozy interior" onError={(e)=>{e.currentTarget.style.opacity=0.8}}/>
      </div>
      <div className="services-right">
        <h2>We Craft Memorable Meals</h2>
        <p>
          Mautamu Delicacies mixes 5-star culinary craft with local favorites. From fine dining to
          affordable homestyle plates, wines and freshly baked bread — we have something for every mood.
        </p>
        <ul>
          <li><strong>Fine Dining Menus</strong> — curated by top chefs.</li>
          <li><strong>Local Favorites</strong> — hearty, affordable plates.</li>
          <li><strong>Bakery & Wines</strong> — bread, desserts and curated wines.</li>
        </ul>
      </div>
    </div>
  )
}
