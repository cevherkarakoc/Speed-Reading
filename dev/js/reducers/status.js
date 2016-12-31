const initialState = {
  readingMode: false,
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

export default function (state = initialState, action) {
  switch (action.type) {
    case 'START_READING':
      return Object.assign({}, state, {
        readingMode: true,
        paused: true,
        words: action.text.split(new RegExp(separators.join('|'), 'g')),
        index: 0
      })
    case 'BACK':
      clearInterval(state.interID)
      return Object.assign({}, state, {
        readingMode: false,
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
    case 'BACK_WORD':
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
    case 'WPM_CHANGED':
      return Object.assign({}, state, {
        wpm: action.newWpm
      })
  }
  return state
}
