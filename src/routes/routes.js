import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Dashboard, Play, HiScores, AddWords} from '../pages'

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
