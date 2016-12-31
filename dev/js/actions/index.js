export const changeText = (text) => {
  return {
    type: 'TEXT_CHANGED',
    newText: text
  }
}

export const changeWpm = (wpm) => {
  return {
    type: 'WPM_CHANGED',
    newWpm: wpm
  }
}

export const startReading = (text) => {
  return {
    type: 'START_READING',
    text: text
  }
}

export const backPrepar = () => {
  return {
    type: 'BACK'
  }
}

export const nextWord = () => {
  return {
    type: 'NEXT_WORD'
  }
}

export const backWord = () => {
  return {
    type: 'BACK_WORD'
  }
}

export const pausePlay = (callback = null) => {
  return {
    type: 'PAUSE_PLAY',
    callback: callback
  }
}
