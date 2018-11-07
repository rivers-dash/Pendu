import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './hiScores.css'

import { getHiscores } from '../../actions'
import { Spinner } from '../../components'
class HiScores extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentWillMount() {
		this.props.getHiscores()
	}

	displayHiscores() {
		const { hiscores } = this.props
		return (
			hiscores.hiscores.data.map((hiscore, index) =>
				<tr key={index}>
	 				<th scope="row">{index + 1}</th>
	 				<td>{hiscore.user.firstName}</td>
	 				<td>{hiscore.user.lastName}</td>
	 				<td>{hiscore.score}</td>
	 			</tr>
			)
		)
	}

  render() {
		const { hiscores } = this.props
		console.log(hiscores)
		if (hiscores.fetched) {
			return (
				<table className="table table-striped table-dark">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First Name</th>
							<th scope="col">Last Name</th>
							<th scope="col">Score</th>
						</tr>
					</thead>

					<tbody>
					 	{this.displayHiscores()}
				 </tbody>
				</table>
			)
		} else {
			return(
				<div className="d-flex flex-column justify-content-center text-center">
					<div>
						<Spinner label='Fetching high scores'/>
					</div>
				</div>
			)
		}
	}
}

const mapStateToProps = (state) => {
	return {
		hiscores: state.hiscores
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			getHiscores,
		 }, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HiScores)
