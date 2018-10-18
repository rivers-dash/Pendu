import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './letter.css'

class Letter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			value: this.props.letter.value,
			isHidden: this.props.letter.isHidden
		}
	}

	displayLetter() {
		const { value, isHidden } = this.state

		if (isHidden) {
			return (
				<div className="letter mx-1 badge badge-dark">
					_
				</div>
			)
	} else {
			return (
				<div className="letter mx-1 badge badge-dark">
					{value}
				</div>
			)
		}
	}

  render() {
    return(this.displayLetter())
	}
}

Letter.propTypes = {
	letter: PropTypes.object.isRequired,
}

export default Letter;
