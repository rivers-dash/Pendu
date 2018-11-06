import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Dashboard } from '../../pages'

class ProtectedRoute extends Component {
  render() {
    const { path, component, auth } = this.props
		if (auth.logged) {
    	return ( <Route exact path={path} component={component}/> )
		} else {
			return ( <Route component={Dashboard}/> )
		}
  }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
	}
}

export default connect(mapStateToProps, undefined)(ProtectedRoute)
