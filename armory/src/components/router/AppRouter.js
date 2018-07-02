import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Category from '../Category'
import Login from '../Login'
import Register from '../Register'
import AdminView from '../AdminView'
import Home from '../Home'
import Details from '../Details'
import MyProfile from '../MyProfile'
import Products from '../Products'
import Promoes from '../Promoes'
import Favorites from '../Favorites'

class AppRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={AdminView} />
        <Route path='/categories' exact component={Category} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/categories/:product' component={Products} />
        <Route path='/details' component={Details} />
        <Route path='/promoes' component={Promoes} />
        <Route path='/login' component={Login} />
        <Route path='/myProfile' component={MyProfile} />
        <Route path='/register' component={Register} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    )
  }
}

export default AppRouter
