import React from 'react'

const Controller = ({ paused, preWord, nextWord, pausePlay }) => {
  return paused && (
    <div className="fixed w-full flex justify-center items-center bottom-10">
      <div className="flex rounded-lg">
        <button className="w-16 bg-gray-100 hover:bg-gray-50 p-1.5 border border-r-0 rounded-l-lg border-gray-400" onClick={preWord}>Left</button>
        <button className="w-16 bg-gray-100 hover:bg-gray-50 p-1.5 border border-gray-400" onClick={pausePlay}>Play</button>
        <button className="w-16 bg-gray-100 hover:bg-gray-50 p-1.5 border border-l-0 rounded-r-lg border-gray-400" onClick={nextWord}>Right</button>
      </div>
    </div>
  )
}

export default Controller;
