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
    <button className="absolute m-4 px-4 py-1 bg-blue-600 focus:bg-blue-500 hover:bg-blue-400 text-white rounded" onClick={backPrepar}>New</button>
    <TheWord word={state.words[state.index]} pausePlay={pausePlay} />
    <Controller paused={state.paused} preWord={preWord} nextWord={nextWord} pausePlay={pausePlay} />
  </div>
}

export default Reader;
