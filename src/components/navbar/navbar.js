import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
          <h3 className="masthead-brand flex-grow-1 pt-3">
						<Link to="dashboard" id="appName">
							{this.props.title}
						</Link>
					</h3>
          <nav className="nav nav-pills pill justify-content-end">

            <Link to="play" id="appName" className="nav-link">
							<FaMale className="justify-content-center col"/>
							<div className="justify-content-center col">Play</div>
						</Link>

						<Link to="hi-scores" id="appName" className="nav-link">
							<FaTrophy className="justify-content-center col"/>
							<div className="justify-content-center col">Hi-Scores</div>
						</Link>

						<Link to="add-words" id="appName" className="nav-link">
							<FaPlus className="justify-content-center col"/>
							<div className="justify-content-center col">Add words</div>
						</Link>

          </nav>
        </div>
      </header>
			</div>
		)
	}
}

export default Navbar;
