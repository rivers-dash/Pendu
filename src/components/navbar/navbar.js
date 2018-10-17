import React, { Component } from 'react';
import './navbar.css'

import { FaMale, FaTrophy ,FaPlus } from 'react-icons/fa'

class Navbar extends Component {
	state = {
	}

  render() {
    return(
			<div >
				<header className="masthead mb-auto mt-2">
        <div className="inner row">
          <h3 className="masthead-brand flex-grow-1">{this.props.title}</h3>
          <nav className="nav nav-pills pill justify-content-end">

            <a className="nav-link active" href="#">
							<FaMale className="justify-content-center col"/>
							<div className="justify-content-center col">Play</div>
						</a>

						<a className="nav-link" href="#">
							<FaTrophy className="justify-content-center col"/>
							<div className="justify-content-center col">Hi-Scores</div>
						</a>

						<a className="nav-link" href="#">
							<FaPlus className="justify-content-center col"/>
							<div className="justify-content-center col">Add words</div>
						</a>

          </nav>
        </div>
      </header>
			</div>
		)
	}
}

export default Navbar;
