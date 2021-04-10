import React from 'react'

const TheWord = ({word, pausePlay}) => {
  return (
      <div className="flex justify-center items-center h-screen" onClick={pausePlay}>
        <h1 className="text-4xl">{word}</h1>
      </div>)
}


export default TheWord;

