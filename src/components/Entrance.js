import React from 'react'

const Entrance = ({text, wpm, setText, setWpm, startReading}) => {
  
    return (
      <div style={{ width: '80%', marginTop: 25 }}>
        <textarea placeholder='Text'
          style={{ marginBottom: 25, width: '100%', height: 400 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div>
          <div>
            Word per minute :
          </div>
          <div>
            <input type='text' placeholder='Word per Minute' style={{ width: 135, textAlign: 'right' }}
              value={wpm} onChange={(e) => setWpm(e.target.value)} />
          </div>

          <div>
            <button type='hollow-primary' onClick={() => startReading(text)}>Start</button>
          </div>
        </div>

      </div>
    )
  
}

export default Entrance;

