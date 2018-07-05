import { Component } from 'react'
import { logout } from '../fetcher/users'

class Logout extends Component {
  componentWillMount () {
    logout()
    this.props.history.push('/')
  }

  render () {
    return null
  }
}

export default Logout
