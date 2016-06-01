import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
  	return <p>abcaaa</p>
  }
}

export default connect()(App)
