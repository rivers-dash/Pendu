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
				<div>
					<AddExpressionForm onSubmit={this.submit} />
				</div>
			)
		}
	}

  render() {
		return (
			<div className="">
				<h1>Add Expression</h1>
				<p>In this section you can add expression to the database so you can
				play them later in the game.</p>
				<p>To add an expression, fill the forme below with a valid expression
				of your choice no longer than 45 characters and give a clue to help
				desperate players then click the submit button.</p>
				<p>If the expresion you uploaded already exist in daatabase, you'll
				have to try again.</p>
				<div id="form" className="row justify-content-center">
					<div className="align-self-center">
						{this.display()}
					</div>
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
