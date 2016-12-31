import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {nextWord, backWord ,setInternal ,pausePlay} from '../actions/index';

import { ButtonGroup, Button } from 'elemental';
class Controller extends Component {
    render() {
         if(!this.props.paused) return null;
        return(
        <div style={fly}>
           <ButtonGroup>
                <Button type="hollow-primary" onClick={this.props.backWord}>Left</Button>
                <Button type="hollow-primary" onClick={this.props.toggle.bind(this,this.props.nextWord)}>Play</Button>
                <Button type="hollow-primary" onClick={this.props.nextWord}>Right</Button>
            </ButtonGroup>
        </div>)
    }
}

function mapStateToProps(state) {
    return {
        paused: state.status.paused
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        nextWord : nextWord,
        backWord : backWord,
        setInternal: setInternal,
        toggle: pausePlay
    },dispatch);
}

const fly={
    position:"fixed",
    bottom: 40,
    display:"flex",
    justifyContent:"center",
    alignItems: 'center',
    width:"100%",
}

export default connect(mapStateToProps,matchDispatchToProps)(Controller);