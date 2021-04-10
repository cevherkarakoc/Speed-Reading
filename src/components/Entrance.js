import React from 'react'
import Button from './Button';

const Entrance = ({text, wpm, setText, setWpm, startReading}) => {
  
    return (
      <div className="container h-4/5 flex flex-col space-y-4 items-center mt-8">
        <textarea
          placeholder='Text'
          className="w-full h-full border border-gray-500 rounded px-4 py-3 "
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className="flex flex-row items-center space-x-2">
          <span>
            Word per minute :
          </span>
          <div>
            <input type='text' className="text-right w-24 border border-gray-500 rounded py-0.5 px-1" placeholder='Word per Minute'
              value={wpm} onChange={(e) => setWpm(e.target.value)} />
          </div>

          <div>
            <Button onClick={() => startReading(text)}>Start</Button>
          </div>
        </div>

      </div>
    )
  
}

export default Entrance;

