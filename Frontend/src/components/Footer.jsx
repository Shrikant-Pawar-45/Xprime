import React, { Component } from 'react'
import * as Icon from 'react-bootstrap-icons';
import '../components/css/Footer.css';
let logosize = 20;
export class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <div className="footer-content">
              <div className='footer-section-First'>
                <h2>Contact Us</h2>
                <a>Website: <a href='https://shrikant-pawar-45.github.io/Xprime/' style={{color:'white'}}>www.xprime-prompt.com</a></a>
                <p>Email: Xprime-prompt@gmail.com</p>
              </div>
              <div className='footer-section-Middle'>
                <h2>Xprime</h2>
                <p>© 2025 Xprime. All rights reserved.</p>
              </div>
              <div className='footer-section-Left'>
                <ul>
                  <li>
                    <a href=''><Icon.Instagram size={logosize}/></a>
                    <a href=""><Icon.Twitter size={logosize}/></a>
                    <a href=""><Icon.Github size={logosize}/></a>
                    <a href=""><Icon.Youtube size={logosize}/></a>
                  </li>
                </ul>
              </div>
              </div>
        </footer>
      </>
    )
  }
}

export default Footer
