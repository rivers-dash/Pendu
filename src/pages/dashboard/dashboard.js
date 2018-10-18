import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './dashboard.css'

import { FaMale } from 'react-icons/fa'
import Hangman from '../../utils/images/hangman.svg'

class Dashboard extends Component {
	state = {
	}

  render() {
    return(
			<div className="d-flex flex-column text-center ">

				<h1 id="title" className="cover-heading text-center">Find the hidden words</h1>
				<p id="subtitle" className="lead text-center mb-5 w-20">
					Come and play the mythic hangman game, with a unique application
					developped with ReactJS, Bootstrab and Postegre database.
				</p>

				<Link to="play">
					<button type="button" className="btn btn-light mx-auto mt-1"> Start </button>
				</Link>


			</div>
		)
	}
}

export default Dashboard;
