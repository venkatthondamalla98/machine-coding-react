import { useEffect, useRef, useState } from "react"

import './App.css'

const OTP_SIZE = 4

const App = () => {
  const [otpArr, setOtpArr] = useState(new Array(OTP_SIZE).fill(""))

  const refArr = useRef([])

  useEffect(() => {
    refArr.current[0]?.focus()
  }, [])

  const handleOnChange = (value, index) => {
    if(isNaN(value)) return;
    let newValue = value.trim()
    let updatedOtpArr = [...otpArr]
    updatedOtpArr[index] = newValue.slice(-1)
    setOtpArr(updatedOtpArr)
    newValue && refArr.current[index + 1]?.focus()
  }

  const handleKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus()
    }
  }

  return (
    <div>
      <h1>Enter OTP</h1>
      {otpArr.map((input, index) => {
        return <input
          type="text"
          key={index}
          className="otp-input"
          value={otpArr[index]}
          ref={(input) => (refArr.current[index] = input)}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      })}
    </div>
  )
}

export default App