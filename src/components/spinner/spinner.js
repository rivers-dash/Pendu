import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './spinner.css'

class Pad extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

  render() {
    return(
			<div className="col justify-content-center">
				<div className="lds-grid">
					<div></div><div></div><div></div>
					<div></div><div></div><div></div>
					<div></div><div></div><div></div>
				</div>

				<div className="mt-1 text-nowrap text-muted">{this.props.label}</div>
		</div>
		)
	}
}

Pad.propTypes = {
	label: PropTypes.string
}

export default Pad;
