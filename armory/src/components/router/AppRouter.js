import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Category from '../Category'
import Login from '../Login'
import Register from '../Register'
import AdminView from '../AdminView'
import Home from '../Home'
import Details from '../Details'
import MyProfile from '../MyProfile'

class AppRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={AdminView} />
        <Route path='/categories' component={Category} />
        <Route path='/details' component={Details} />
        <Route path='/login' component={Login} />
        <Route path='/myProfile' component={MyProfile} />
        <Route path='/register' component={Register} />
      </Switch>
    )
  }
}

export default AppRouter
