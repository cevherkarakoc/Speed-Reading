import React from 'react'

const Controller = ({ paused, preWord, nextWord, pausePlay }) => {
  return paused && (
    <div style={fly}>
      <div>
        <button onClick={preWord}>Left</button>
        <button onClick={pausePlay}>Play</button>
        <button onClick={nextWord}>Right</button>
      </div>
    </div>
  )
}

const fly = {
  position: 'fixed',
  bottom: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
}

export default Controller;
