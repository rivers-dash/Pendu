import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './addExpression.css'

import { AddExpressionForm } from '../../components'

import { addExpression } from '../../actions'

class AddExpression extends Component {
	constructor(props) {
		super(props)
		this.state = {
			displayForm: true,
		}
		this.display = this.display.bind(this)
	}

	submit = (values) => {
		this.props.addExpression(values)
	}

	display() {
		console.log(this.props.addedExpression)
		const { added, error } = this.props.addedExpression
		if (!error && added) {
			return (
				<div className="animate">
					<span className="emoji" role="img" aria-label="upper red triangle">🔺</span>
					<div>Successfully uploaded</div>
				</div>
			)
		}
		else if (error && !added) {
			return (
				<div className="animate">
					<span className="emoji" role="img" aria-label="red cross">❌</span>
					<div>Expression already exist</div>
				</div>
			)
		}
		else {
			return (
				<AddExpressionForm onSubmit={this.submit} />
			)
		}
	}

  render() {
		return (
			<div className="row">
				<div className="justify-content-center align-self-center ">
					{this.display()}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		addedExpression: state.addedExpression,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			addExpression
		 }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(AddExpression)
