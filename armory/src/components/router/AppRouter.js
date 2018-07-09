import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import Categories from '../Categories'
import Login from '../Login'
import Register from '../Register'
import AdminView from '../AdminView'
import Home from '../Home'
import Details from '../Details'
import MyProfile from '../MyProfile'
import Products from '../Products'
import Promoes from '../Promoes'
import Favorites from '../Favorites'
import NotFound from '../NotFound'
import Create from '../Create'
import Logout from '../Logout'

class AppRouter extends Component {
  render () {
    return (
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/admin' component={AdminView} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/favorites' exact component={Favorites} />
        <Route path='/categories/:categoryName' component={Products} />
        <Route path='/promoes' component={Promoes} />
        <Route path='/login' render={props => <Login {...props} login={this.props.login} />} />
        <Route path='/myProfile' render={props => <MyProfile {...props} user={this.props.user} update={this.props.update} />} />
        <Route path='/register' render={props => <Register {...props} register={this.props.register} />} />
        <Route path='/details/:productId' component={Details} />
        <Route path='/create' component={Create} />
        <Route path='/logout' render={props => <Logout {...props} logout={this.props.logout} />} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}

AppRouter.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired
}

export default AppRouter
