import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeText, startReading, changeWpm } from '../actions/index'
import { Card, InputGroup, FormInput, Button } from 'elemental'

class Entrance extends Component {

  changeText (e) {
    var newValue = e.target.value
    this.props.changeText(newValue)
  }

  changeWpm (e) {
    var newValue = e.target.value
    this.props.changeWpm(newValue)
  }

  render () {
    return (
      <Card style={{ width: '80%', marginTop: 25 }}>
        <FormInput placeholder='Text' multiline
          style={{ marginBottom: 25, height: 400 }}
          value={this.props.text}
          onChange={(e) => this.changeText(e)}
          />

        <InputGroup>
          <InputGroup.Section>
            Word per minute :
                </InputGroup.Section>
          <InputGroup.Section grow>
            <FormInput type='input' placeholder='Word per Minute' style={{ width: 135, textAlign: 'right' }}
              value={this.props.wpm} onChange={(e) => this.changeWpm(e)} />
          </InputGroup.Section>

          <InputGroup.Section>
            <Button type='hollow-primary' onClick={() => this.props.startReading(this.props.text)}>Start</Button>
          </InputGroup.Section>
        </InputGroup>

      </Card>
    )
  }
}

function mapStateToProps (state) {
  return {
    text: state.text,
    wpm: state.status.wpm
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({
    changeText: changeText,
    startReading: startReading,
    changeWpm: changeWpm
  }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Entrance)
