import React, { Component } from 'react';
import './App.css'

import Navbar from './components/navbar/navbar'

class App extends Component {
	state = {
		title: 'Hangman'
	}

  render() {
		const { title } = this.state
    return(
			<div id="app" className="app cover-container d-flex w-100 h-100 p-3 flex-column full-height-div">
				<div id="appContainer" class="full-height-div">
					<Navbar
						title={title}
					></Navbar>
				</div>
			</div>
		)
	}
}

export default App;
