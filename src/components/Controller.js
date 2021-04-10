import React from 'react'
import Button from './Button';

const Controller = ({ paused, preWord, nextWord, pausePlay }) => {
  return paused && (
    <div className="fixed w-full flex justify-center items-center bottom-10">
      <div className="flex rounded-lg">
        <Button type="control" left onClick={preWord}>Left</Button>
        <Button type="control" onClick={pausePlay}>Play</Button>
        <Button type="control" right onClick={nextWord}>Right</Button>
      </div>
    </div>
  )
}

export default Controller;
