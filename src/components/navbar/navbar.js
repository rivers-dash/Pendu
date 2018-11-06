import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './navbar.css'

import AppName from '../../utils/images/appName.svg'

class Navbar extends Component {
	state = {
	}

	displayProfile() {
		const { auth } = this.props
		if (auth.logged) {
			return (
				<div>
					<Link to="profile" className="nav-link">
						<span className="d-flex justify-content-center"
							role="img" aria-label="adulte"
						>🧑🏻</span>
						<div className="justify-content-center col no-wrap text-center">Profile</div>
					</Link>
				</div>
			)
		} else {
			return (
				<div></div>
			)
		}
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
            <Link to="play" className="nav-link">
							<span className="d-flex justify-content-center"
								role="img" aria-label="joystic"
							>🕹</span>
							<div className="justify-content-center col no-wrap text-center">Play</div>
						</Link>

						<Link to="hi-scores" className="nav-link">
							<span className="d-flex justify-content-center"
								role="img" aria-label="trophy"
							>🏆</span>
							<div className="justify-content-center col no-wrap text-center">Hi-Scores</div>
						</Link>

						<Link to="add-expression" className="nav-link">
							<span className="d-flex justify-content-center"
								role="img" aria-label="memo"
							>📝</span>
							<div className="justify-content-center col no-wrap text-center">Add Expression</div>
						</Link>

						{this.displayProfile()}
          </nav>

        </div>
      </header>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, undefined)(Navbar);
