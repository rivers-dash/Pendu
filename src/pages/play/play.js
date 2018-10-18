import React, { Component } from 'react';
import './play.css'

import Pad from '../../components/pad/pad'

import { FaMale } from 'react-icons/fa'

class Play extends Component {
	state = {
	}

  render() {
    return(
			<div className='row justify-content-center'>
				This is play
				<Pad/>
			</div>
		)
	}
}

export default Play;
