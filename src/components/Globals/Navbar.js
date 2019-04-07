import React, { Component } from 'react'
import {Link} from 'gatsby'

export default class Navbar extends Component {
  state = {
      navbarOpen: false,
      css:'',
      links: [
          {
              id: 1,
              path:'/contact',
              text:'Contactez-nous'
          }
      ]  
  }
  navbarHandler = () => {
    console.log("coucou");
  };
  
  
    render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <Link to="/">Logo</Link>

    <Link role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </Link>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
     

      <div className="navbar-item has-dropdown is-hoverable">
       
        <div className="navbar-dropdown">
          <p>menu</p>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <p>contact</p>
        </div>
      </div>
    </div>
  </div>
</nav>
    )
  }
}
