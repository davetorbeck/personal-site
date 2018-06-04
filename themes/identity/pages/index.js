import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import avatar from '../images/avatar.jpg'

import '../styles/main.scss'

const styles = {
  avatar: {
    width: '200px',
    height: '200px',
  },
  icon: {
    border: 'none',
    // fontSize: '40px',
    // width: '6em',
    // height: '6em',
  },
}
export default function Index({ data }) {
  // document.body.classList.add('is-loading');

  return (
    <div id="wrapper">
      {/* <!-- Main --> */}
      <section id="main">
        <header>
          <span className="avatar">
            <img src={avatar} alt="" style={styles.avatar} />
          </span>
          <h1>David Torbeck</h1>
          <p>Fullstack Developer</p>
        </header>

        <footer>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/DaveTorbeck"
                className="fa-github"
                style={styles.icon}
              />
            </li>
            <li>
              <a
                href="https://twitter.com/dtor111"
                className="fa-twitter"
                style={styles.icon}
              />
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/davetorbeck/"
                className="fa-linkedin"
                style={styles.icon}
              />
            </li>
          </ul>
        </footer>
      </section>

      {/* <!-- Footer --> */}
      <footer id="footer">
        <ul className="copyright">
          <li>&copy; David Torbeck</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </footer>
    </div>
  )
}
