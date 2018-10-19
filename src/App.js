import React, { Component } from 'react';
import './App.css'

import Routes from './routes/routes'
import Navbar from './components/navbar/navbar'

import { BrowserRouter} from 'react-router-dom'


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

					<main className="mx-2 my-2 d-flex justify-content-center vertical-center">
						<Routes />
					</main>
				</div>
				<footer className="mb-2">Developped by Smail Meziani 🕹</footer>
			</div>
		</BrowserRouter>
		)
	}
}

export default App;
