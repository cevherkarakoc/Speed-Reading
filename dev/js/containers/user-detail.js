import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserDetail extends Component {

  render () {
    if (!this.props.user) return (<h4>Select a user...</h4>)
    return (
      <div>
        <p>{this.props.user.id}</p>
        <p>{this.props.user.name}</p>
        <p>{this.props.user.age}</p>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    user: state.activeUser
  }
}

export default connect(mapStateToProps)(UserDetail)
