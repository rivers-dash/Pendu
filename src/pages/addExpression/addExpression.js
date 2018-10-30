import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './addExpression.css'

import { addExpression } from '../../actions'

class AddExpression extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

  render() {
		return (
			<div>
				AddExpression
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		...bindActionCreators({
			addExpression
		 }, dispatch)
	}
}


export default connect(undefined, mapDispatchToProps)(AddExpression)
