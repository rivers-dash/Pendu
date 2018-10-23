import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './play.css'

import { strike, miss, clue, win } from '../../actions/scoreActions'
import { letterClick } from '../../actions/expressionActions'

import Clue from '../../components/clue/clue'
import Pad from '../../components/pad/pad'
import Expression from '../../components/expression/expression'
import Win from '../../components/win/win'

class Play extends Component {
	constructor(props) {
		super(props)
		this.state = {
			expression: this.props.expression,
			bgwin: 'card-header card-title'
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.expression.isWin)
			this.setState({ bgwin: 'card-header card-title bg-danger'})
		if (this.props.expression.isWin && !nextProps.expression.isWin){
			console.log('new game : ', this.props.expression.isWin, nextProps.expression.isWin, nextProps.expression.value)
			this.setState({ expression: nextProps.expression})
		}
	}

	handleButtonClick(letter) {
		this.setState({ letterClicked: letter})
		this.props.letterClick(letter)
		this.updateScore(letter)
	}

	updateScore(letter) {
		const { value } = this.state.expression
		let points = (value.split(letter)).length - 1
		if (points === 0) {
			this.props.miss()
		} else {
			this.props.strike()
		}
	}

	onClueClick() {
		this.props.clue()
	}

	displayWin() {
		const { isWin } = this.props.expression
		const { strikeScore } = this.props.score

		if (isWin) {
			return (
				<Win score={strikeScore}/>
			)
		} else {
			return (
				<Pad onButtonClick={this.handleButtonClick.bind(this)}/>
			)
		}
	}

  render() {
		const { score } = this.props
    return(
			<div className="container">
			<div id="cell1" className="d-flex row justify-content-between flex-nowrap">

				<div id="card1" className="justify-content-center">
					<div className="card text-white bg-dark mb-3">
					  <div className={this.state.bgwin}>
							<h1>Score : {score.strikeScore}</h1>
					</div>
						<div className="card-body">
					    <p className="card-text">
							Every wrong guess will cost you {score.hitPoints} points,
							and a good guess will get you {score.strikePoints - score.hitPoints} points
							</p>
					  </div>
					</div>
				</div>

				<div id="card2" className="justify-content-center">
					<Clue clue={this.state.expression.clue} onClueClick={this.onClueClick.bind(this)}/>
				</div>

			</div>

			<div id="cell2" className='justify-content-center'>
				<Expression expression={this.props.expression.letters}/>
				{this.displayWin()}
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
		...bindActionCreators({ strike, miss, clue, letterClick, win }, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Play)
