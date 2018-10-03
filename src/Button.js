import React from 'react'
import './Button.css'
import PropTypes from 'prop-types'

const HIDDEN_SYMBOL = '_'

const Button = ({ letter, feedback, index, onClick, clicable }) => (
	<div className={`letter ${feedback} ${clicable}`} onClick={() => onClick(letter)}>
		<span className="symbol">
			{feedback === 'hidden' ? HIDDEN_SYMBOL : letter}
		</span>
	</div>
)

Button.propTypes = {
	letter: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	feedback: PropTypes.oneOf([
		'visible',
		'hidden',
		'justMatched',
		'justMismatched',
	]).isRequired,
	clicable: PropTypes.PropTypes.oneOf([
		'clicable',
		'unclicable',
	]).isRequired,
	index: PropTypes.number.isRequired,

}

export default Button
