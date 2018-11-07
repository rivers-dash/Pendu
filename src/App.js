import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './App.css'

import Routes from './routes/routes'
import Navbar from './components/navbar/navbar'
import { login,} from './actions'

import { BrowserRouter } from 'react-router-dom'


class App extends Component {
	state = {
		title: 'Hangman'
	}

	componentDidMount() {
    this.props.login()
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

					<main className="mb-2 mt-4 my-2 d-flex justify-content-center">
						<Routes />
					</main>
				</div>
				<footer className="mb-2">Developped by Smail Meziani 🕹</footer>
			</div>
		</BrowserRouter>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			login,
		 }, dispatch)
	}
}

export default connect(undefined, mapDispatchToProps)(App)
