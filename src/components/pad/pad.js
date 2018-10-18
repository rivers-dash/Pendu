import React, { Component } from 'react';
import Letters from './letters.js'
import Button from '../button/button'
import './pad.css'

class Pad extends Component {
	state = {
	}

  render() {
    return(
			<div id="container">
				<div className="a">
				{Letters.map((letter, index) => (
					<Button key= {index} letter= {letter} />
					))}
			</div>
			</div>
		)
	}
}

export default Pad;
