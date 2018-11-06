import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './profile.css'

import { logout } from '../../actions'

import {
} from '../../components'

class Profile extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

  render() {
		const { logout } = this.props
		return (
			<div className='row'>
				<div className='justify-content-center align-self-center'>
					<div className="d-flex justify-content-center mt-4">
						<button className="btn btn-outline-danger" onClick={logout}>Logout</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score,
		expression: state.expression
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			logout
		 }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
