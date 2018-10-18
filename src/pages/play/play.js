import React, { Component } from 'react';
import './play.css'

import Pad from '../../components/pad/pad'
import Hidden from '../../components/hidden/hidden'

import { FaMale } from 'react-icons/fa'

class Play extends Component {
	state = {
	}

  render() {
    return(
			<div className='col justify-content-center'>
				<Hidden/>
				<Pad/>
			</div>
		)
	}
}

export default Play;
