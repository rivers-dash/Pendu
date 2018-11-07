import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './profile.css'

import { editProfile, logout } from '../../actions'

import { ProfileForm, Spinner } from '../../components'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	submit = (values) => {
		const { user } = this.props.auth
		delete values.newPasswordCheck
		values.id = user.id
		console.log(values)
		this.props.editProfile(values)
	}

  render() {
		const { logout, auth } = this.props

		if (auth.editing) {
			return (
				<div className="d-flex flex-column justify-content-center text-center">
					<div>
					<Spinner label='Editing your profile'/>
				</div>
				</div>
			)
		} else {
			let err = null
			if (auth.error)
				if (auth.error.response.data.error)
					err = auth.error.response.data.error
			return (
				<div className='row'>
					<div className='justify-content-center align-self-center'>
						<div className="text-danger animate mb-1">{err}</div>
						<ProfileForm
							onSubmit={this.submit}
							user={auth.user}
						/>
						<div className="d-flex justify-content-center mt-5">
							<button className="btn btn-outline-danger" onClick={logout}>Logout</button>
						</div>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			editProfile,
			logout
		 }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
