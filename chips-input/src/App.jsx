import { useState } from "react"

import "./App.css"

const App = () => {
  const [inputText, setInputText] = useState('')

  const [chips, setChips] = useState([])

  const hanldeOnKeyDown = (e) => {
    if(e.key === 'Enter' && inputText.trim()){
      setChips(prev => [...prev, inputText])
      setInputText('')
    }
  }

  const handleDeleteChip = (index) => {
    let updatedChipsArr = [...chips]
    updatedChipsArr.splice(index, 1)
    setChips(updatedChipsArr)
  }

  return(
    <div>
    <div>
        <h1>Chips input</h1>
      <input 
      className="input-field"
      type="text"
      value={inputText}
      onChange={(e) => setInputText(e.target.value)}
      onKeyDown={e => hanldeOnKeyDown(e)}
      />
    </div>
    <div>
      {
        chips.map((chip, index) => {
          return <div 
          className="chip-component"
          key={index}>
            {chip}
            <button 
            style={{color: 'red'}}
             onClick={() => handleDeleteChip(index)}>X</button>
            </div>
        })
      }
    </div>
    </div>
  )
}

export default App