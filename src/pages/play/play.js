import React, { Component } from 'react';
import { connect } from 'react-redux'
import './play.css'

import { strike } from '../../actions/scoreActions'

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
		this.props.strike()
	}

  render() {
    return(
			<div className='col justify-content-center'>
				<div className="d-flex justify-content-center">Score : {this.props.score.strikes}</div>
				<Expression letterClicked={this.state.letterClicked}/>
				<Pad onButtonClick={this.handleButtonClick.bind(this)}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		strike: () => {
			dispatch(strike(1))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Play)
