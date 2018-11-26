import React, { Component } from 'react';

import './fiveOhThree.css'

class FiveOhThree extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

  render() {
		return (
			<div className="flex-column align-self-center">
				<h1 className="d-flex justify-content-center">503</h1>
				<div className="">
					<p>Service Unavailable</p>
				</div>
			</div>
				)
	}
}

export default FiveOhThree
