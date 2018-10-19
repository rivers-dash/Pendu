import React, { Component } from 'react';
import './play.css'

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
	}

  render() {
    return(
			<div className='col justify-content-center'>
				<Expression letterClicked={this.state.letterClicked}/>
				<Pad onButtonClick={this.handleButtonClick.bind(this)}/>
			</div>
		)
	}
}

export default Play;
