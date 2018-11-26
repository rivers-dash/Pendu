import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import './dashboard.css'

import { login, logout, signin } from '../../actions'
import { LoginForm, SigninForm, Spinner } from '../../components'

class Dashboard extends Component {
	constructor(props) {
		super(props)
		this.state = {
			login: false,
			signin: false,
		}
		this.login = this.login.bind(this)
		this.loginSubmit = this.loginSubmit.bind(this)
		this.signin = this.signin.bind(this)
		this.signinSubmit = this.signinSubmit.bind(this)
	}

	login() {
		this.setState({ login: true, signin: false })
	}

	signin() {
		this.setState({ login: false, signin: true })
	}

	loginSubmit() {
		const { login, loginForm, auth } = this.props
		login(loginForm.values)

		if(auth.loging) {
			this.setState({ login: false, signin: false })
		}
		if(auth.logged) {
			this.setState({ login: false, signin: false  })
		} else if (!auth.logged) {
		}
	}

	signinSubmit() {
		const { signin, signinForm, auth } = this.props
		let user = { ...signinForm.values }
		delete user.passwordCheck
		signin(user)

		if(auth.signingin) {
			this.setState({ login: false, signin: false })
		} else if (!auth.signingin) {
		}
	}

	display() {
		const { login, signin } = this.state
		const { auth } = this.props

		if (auth.loging) {
			return (
				<div>
					<Spinner label='Loging'/>
				</div>
			)
		} else if (auth.signingin) {
			return (
				<div>
					<Spinner label='Signing In'/>
				</div>
			)
		} else if (auth.logged) {
			return (
				<div>
					<h1 id="title" className="cover-heading text-center">Welcome {auth.user.firstName} {auth.user.lastName}</h1>
					<p id="subtitle" className="lead text-center mb-5 w-20">
						Come and play the mythic hangman game, with a unique application
						developped with ReactJS, Bootstrab and Postegre database.
					</p>
				</div>
			)
		} else if (!login && !signin) {
			return (
				<div>
					<h1 id="title" className="cover-heading text-center">Find the hidden words</h1>
					<p id="subtitle" className="lead text-center mb-5 w-20">
						Come and play the mythic hangman game, with a unique application
						developped with ReactJS, Bootstrab and Postegre database.
					</p>

					<button type="button" className="btn btn-outline-danger mx-2 mt-1"
						onClick={this.login}
					> Login </button>

					<button type="button" className="btn btn-outline-danger mx-2 mt-1"
						onClick={this.signin}
					> Sign In </button>
				</div>
			)
		} else if (login && ! signin) {
			let err = null
			if (auth.error)
				if(!auth.error.response){
					return (
						<Redirect to='/fiveOhThree' />
					)
				}
				else if (auth.error.response.data.error)
					err = auth.error.response.data.error
			return (
				<div>
					<div className="text-danger animate mb-1">{err}</div>
					<LoginForm onSubmit={this.loginSubmit}/>
				</div>
			)
		} else if (!login && signin) {
			let err = null
			if (auth.error)
				if (auth.error.response.data.error)
					err = auth.error.response.data.error
			return (
				<div>
					<div className="text-danger animate mb-1">{err}</div>
					<SigninForm onSubmit={this.signinSubmit}/>
				</div>
			)
		}
	}

  render() {
		return (
			<div className="d-flex flex-column justify-content-center text-center">
				{this.display()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		loginForm: state.form.login,
		signinForm: state.form.signin,
		auth: state.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			login,
			logout,
			signin
		 }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
