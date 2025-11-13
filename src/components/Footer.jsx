
import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Mautamu Delicacies</h4>
          <p>5-star dining & local favorites. Open daily from 8AM to 11PM.</p>
        </div>
        <div>
          <h5>Menu</h5>
          <ul>
            <li>Starters</li>
            <li>Main Courses</li>
            <li>Desserts</li>
            <li>Bakery</li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>+254 700 000 000<br/>info@mautamu.co.ke</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Mautamu Delicacies — All rights reserved.</div>
    </footer>
  )
}
