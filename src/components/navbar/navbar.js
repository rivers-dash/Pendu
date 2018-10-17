import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
	state = {
	}

  render() {
    return(
			<div >
				<header className="masthead mb-auto mt-2">
        <div className="inner row">
          <h3 className="masthead-brand flex-grow-1">Hangman</h3>
          <nav className="nav nav-pills pill justify-content-end">
            <a className="nav-link active" href="#">Home</a>
            <a className="nav-link" href="#">Features</a>
            <a className="nav-link" href="#">Contact</a>
          </nav>
        </div>
      </header>
			</div>
		)
	}
}

export default Navbar;
