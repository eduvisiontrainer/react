import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      Volg mij{' '}
      <a href="https://www.instagram.com/authorjimdunk/">@authorjimdunk</a>
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="http://unboundit.com/">UnboundiT</a>.
        </span>
      </div>
    </footer>
  </div>
)
