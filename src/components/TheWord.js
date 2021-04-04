import React from 'react'

const TheWord = ({word, pausePlay}) => {
  return (
      <div style={flex} onClick={pausePlay}>
        <h1>{word}</h1>
      </div>)
}

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}

export default TheWord;

