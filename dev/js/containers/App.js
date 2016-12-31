import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { backPrepar } from '../actions/index'
import Prepar from '../components/prepar'
import Reader from '../components/reader'

require('../../../node_modules/elemental/less/elemental.less')

class App extends Component {

  render () {
    if (this.props.readingMode) return <Reader backPrepar={this.props.backPrepar} />
    else return <Prepar />
  }
}

function mapStateToProps (state) {
  return {
    readingMode: state.status.readingMode
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    backPrepar: backPrepar
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(App)
