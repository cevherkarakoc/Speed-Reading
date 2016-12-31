import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { nextWord, pausePlay } from '../actions/index'

class TheWord extends Component {
  render () {
    return (
      <div style={flex} onClick={this.props.toggle.bind(this, this.props.nextWord)}>
        <h1>{this.props.words[this.props.index]}</h1>
      </div>)
  }
}

function mapStateToProps (state) {
  return {
    words: state.status.words,
    index: state.status.index
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    nextWord: nextWord,
    toggle: pausePlay
  }, dispatch)
}

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export default connect(mapStateToProps, matchDispatchToProps)(TheWord)
