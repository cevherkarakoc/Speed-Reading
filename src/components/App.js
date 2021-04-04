import React, { useState } from 'react'

import Reader from './Reader'
import Entrance from './Entrance'
import Info from './Info'
import { initialText } from '../text'

const App = () => {
  const [isReadingMode, setIsReadingMode] = useState(false);
  const [text, setText] = useState(initialText);
  const [wpm, setWpm] = useState(300);

  return isReadingMode
    ? <Reader text={text} wpm={wpm} backPrepar={() => setIsReadingMode(false)} />
    : (
      <div>
        <Entrance 
          text={text}
          wpm={wpm}
          setText={setText}
          setWpm={setWpm}
          startReading={() => setIsReadingMode(true)}
        />
        <Info />
      </div>
    );
}

export default App;
