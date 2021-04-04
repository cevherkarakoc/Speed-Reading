import { useReducer } from "react"

const initialState = {
  words: [],
  index: 0,
  interID: 0,
  wpm: 300,
  paused: false
}

const separators = [' ', '\n']

const interval = (callback, wpm) => {
  let inter = setInterval(() => {
    callback()
  }, (60 * 1000 / wpm))
  return inter
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_READING':
      return Object.assign({}, state, {
        paused: true,
        wpm: action.wpm,
        words: action.text.split(new RegExp(separators.join('|'), 'g')),
        index: 0
      })
    case 'STOP_READING':
      clearInterval(state.interID)
      return Object.assign({}, state, {
        interID: 0
      })
    case 'NEXT_WORD':
      let nextIndex = state.index + 1
      let newPaused = state.paused
      if (nextIndex >= state.words.length - 1) {
        nextIndex = state.words.length - 1
        if (state.interID >= 0) {
          clearInterval(state.interID)
          newPaused = !newPaused
        }
      }
      return Object.assign({}, state, {
        index: nextIndex,
        paused: newPaused
      })
    case 'PRE_WORD':
      let prevIndex = state.index - 1
      if (prevIndex < 0) prevIndex = 0
      return Object.assign({}, state, {
        index: prevIndex
      })
    case 'PAUSE_PLAY':
      let newinterID = 0
      if (!state.paused) clearInterval(state.interID)
      else {
        newinterID = interval(action.callback, state.wpm)
      }
      return Object.assign({}, state, {
        paused: !state.paused,
        interID: newinterID
      })
  }
  return state
}

export const useReader = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const preWord = () => dispatch({ type: 'PRE_WORD' });
  const nextWord = () => dispatch({ type: 'NEXT_WORD' });
  const pausePlay = () => dispatch({ type: 'PAUSE_PLAY', callback: nextWord });
  const stopReading = () => dispatch({ type: 'STOP_READING' });
  const startReading = (text, wpm) => dispatch({
    type: 'START_READING',
    text: text,
    wpm: wpm
  });

  return [state, {
    preWord,
    nextWord,
    pausePlay,
    stopReading,
    startReading,
  }];
}
