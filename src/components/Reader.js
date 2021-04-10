import React, { useEffect } from 'react';
import TheWord from './TheWord';
import Controller from './Controller';
import { useReader } from '../reducers/status';
import Button from './Button';

const Reader = ({text, wpm, backPrepar}) => {
  const [state, actions] = useReader(text, wpm);
  const {
    preWord,
    nextWord,
    pausePlay,
    stopReading,
    startReading
  } = actions;

  useEffect(() => {
    startReading(text, wpm);
    return () => {
      stopReading();
    }
  }, [text, wpm])

  return <div>
    <Button onClick={backPrepar} className="absolute m-4">New</Button>
    <TheWord word={state.words[state.index]} pausePlay={pausePlay} />
    <Controller paused={state.paused} preWord={preWord} nextWord={nextWord} pausePlay={pausePlay} />
  </div>
}

export default Reader;
