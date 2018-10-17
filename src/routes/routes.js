import React, { Component } from 'react';

import Navbar from '../components/navbar/navbar'
import Dashboard from '../pages/dashboard/dashboard'
import Game from '../pages/game/game'
import HiScores from '../pages/hiScores/hiScores'
import AddWords from '../pages/addWords/addWords'

import { Switch, Route } from 'react-router-dom'


class Routes extends Component {
	state = {
	}

  render() {
    return(
			<Switch>
			  <Route exact path='/dashboard' component={Dashboard}/>
				<Route exact path='/play' component={Game}/>
				<Route exact path='/hi-scores' component={HiScores}/>
				<Route exact path='/add-words' component={AddWords}/>
			</Switch>
		)
	}
}

export default Routes;
