import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '_'

const Button = ({ letter, feedback, index, onClick }) => (
	<div className={`letter ${feedback}`} onClick={() => onClick(index)}>
		<span className="symbol">
			{feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
		</span>
	</div>
)

Button.propTypes = {
	letter: PropTypes.string.isRequired,
	//onClick: PropTypes.func.isRequired,
	feedback: PropTypes.oneOf([
		'visible',
		'hidden',
		'justMatched',
		'justMismatched',
	]).isRequired,
	index: PropTypes.number.isRequired,
}

export default Button
