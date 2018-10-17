import React, { Component } from 'react';
import './App.css'

import Routes from './routes/routes'
import Navbar from './components/navbar/navbar'
import Dashboard from './pages/dashboard/dashboard'
import Game from './pages/game/game'
import HiScores from './pages/hiScores/hiScores'
import AddWords from './pages/addWords/addWords'

import { BrowserRouter, Switch, Route } from 'react-router-dom'


class App extends Component {
	state = {
		title: 'Hangman'
	}

  render() {
		const { title } = this.state
    return(
			<BrowserRouter>
			<div id="app" className="app cover-container d-flex w-100 h-100 p-3 flex-column full-height-div">
				<div id="appContainer" className="full-height-div">
					<Navbar
						title={title}
					></Navbar>

					<main className="mx-2 my-2">
						<Routes />
					</main>
				</div>
			</div>
		</BrowserRouter>
		)
	}
}

export default App;
