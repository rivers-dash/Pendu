import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './play.css'

import { strike, miss } from '../../actions/scoreActions'

import Pad from '../../components/pad/pad'
import Expression from '../../components/expression/expression'

class Play extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	handleButtonClick(letter) {
		console.log('play', letter)
		this.setState({ letterClicked: letter})
		this.updateScore(letter)
	}

	updateScore(letter) {
		const { value } = this.props.expression
		let points = (value.split(letter)).length - 1
		if (points === 0) {
			this.props.miss(1)
		} else {
			this.props.strike(points)
		}
	}

  render() {
    return(
			<div className='col justify-content-center'>
				<div className="d-flex justify-content-center">Score : {this.props.score.strikes}</div>
				<div className="d-flex justify-content-center">Essais : {this.props.score.hits}</div>
				<Expression letterClicked={this.state.letterClicked} expression={this.props.expression}/>
				<Pad onButtonClick={this.handleButtonClick.bind(this)}/>
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
		...bindActionCreators({ strike, miss }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Play)
