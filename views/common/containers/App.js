import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
  	return <p>Demo React</p>
  }
}

export default connect()(App)
