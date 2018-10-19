import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

import { FaMale, FaTrophy ,FaPlus } from 'react-icons/fa'
import AppName from '../../utils/images/appName.svg'

class Navbar extends Component {
	state = {
	}

  render() {
    return(
			<div >
				<header className="masthead mb-auto mt-2">
        <div className="inner row no-wrap">

          <h3 className="masthead-brand pt-3 col">
						<Link to="dashboard" id="appName">
							<img alt="" src={AppName} className="appName"></img>
						</Link>
					</h3>

          <nav className="nav nav-pills pill justify-content-end no-wrap">
            <Link to="play" id="appName" className="nav-link">
							<FaMale className="justify-content-center col"/>
							<div className="justify-content-center col no-wrap text-center">Play</div>
						</Link>

						<Link to="hi-scores" id="appName" className="nav-link">
							<FaTrophy className="justify-content-center col"/>
							<div className="justify-content-center col no-wrap text-center">Hi-Scores</div>
						</Link>

						<Link to="add-words" id="appName" className="nav-link">
							<FaPlus className="justify-content-center col"/>
							<div className="justify-content-center col no-wrap text-center">Add words</div>
						</Link>
          </nav>

        </div>
      </header>
			</div>
		)
	}
}

export default Navbar;
