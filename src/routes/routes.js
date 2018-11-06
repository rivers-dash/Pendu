import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Dashboard, Play, HiScores, AddExpression, Profile} from '../pages'
import ProtectedRoute from './protectedRoute/protectedRoute'

class Routes extends Component {
	state = {
	}

  render() {
    return(
			<Switch>
				<Route exact path='/' component={Dashboard}/>
			  <Route exact path='/dashboard' component={Dashboard}/>
				<ProtectedRoute path='/play' component={Play}/>
				<ProtectedRoute path='/hi-scores' component={HiScores}/>
				<ProtectedRoute path='/add-expression' component={AddExpression}/>
				<ProtectedRoute path='/profile' component={Profile}/>
				<Route component={Dashboard}/>
			</Switch>
		)
	}
}

export default Routes;
