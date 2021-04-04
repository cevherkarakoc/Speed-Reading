import React, { useEffect } from 'react';
import TheWord from './TheWord';
import Controller from './Controller';
import { useReader } from '../reducers/status';

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
    <button style={{ position: 'absolute', margin: 5 }} onClick={backPrepar}>New</button>
    <TheWord word={state.words[state.index]} pausePlay={pausePlay} />
    <Controller paused={state.paused} preWord={preWord} nextWord={nextWord} pausePlay={pausePlay} />
  </div>
}

export default Reader;
