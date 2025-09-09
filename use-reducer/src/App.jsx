import { useReducer } from "react";
import "./App.css"

const App = () => {
  const initialFormState = {
    userName: "",
    email: "",
    password: ""
  }

  const formReducer = (state, action) => {
    switch (action.type) {
      case "addUser":
        return {
          ...state,
          [action.field]: action.value,
        }
      case "Reset":
        return initialFormState
      default:
        return state
    }
  }

  const [formState, dispatch] = useReducer(formReducer, initialFormState)

  const handleOnChange = (e) => {
    dispatch({
      type: "addUser",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log(formState, "formState")
    dispatch({ type: "Reset" })
  }

  return (
    <div className="main-component">
      <div className="small-component">
        <label>Name:</label>
        <input
          className="text-input"
          type="text"
          name="userName"
          value={formState.userName}
          onChange={handleOnChange}
        />

        <label>Email:</label>
        <input
          className="text-input"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleOnChange}
        />

        <label>Password:</label>
        <input
          className="text-input"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleOnChange}
        />

        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default App
