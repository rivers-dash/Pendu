import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar'
import Dashboard from '../pages/dashboard/dashboard'
import Play from '../pages/play/play'
import HiScores from '../pages/hiScores/hiScores'
import AddWords from '../pages/addWords/addWords'

import { Switch, Route } from 'react-router-dom'


class Routes extends Component {
	state = {
	}

  render() {
    return(
			<Switch>
				<Route exact path='/' component={Dashboard}/>
			  <Route exact path='/dashboard' component={Dashboard}/>
				<Route exact path='/play' component={Play}/>
				<Route exact path='/hi-scores' component={HiScores}/>
				<Route exact path='/add-words' component={AddWords}/>
				<Route component={Dashboard}/>
			</Switch>
		)
	}
}

export default Routes;
