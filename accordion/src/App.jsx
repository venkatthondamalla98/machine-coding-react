import { useState, createContext } from "react";

import Accordion from "./components/Accordion"

import "./App.css"

export const store = createContext()

const App = () => {
    const [data, setData] = useState([
         {
      title: "JavaScript",
      content: "JavaScript is a versatile programming language used in web development."
    },
    {
      title: "React",
      content: "React is a popular front-end library for building user interfaces."
    },
    {
      title: "Node.js",
      content: "Node.js allows JavaScript to run on the server-side."
    },
    {
    title: "MongoDB",
    content: "MongoDB is a NoSQL database that stores data in JSON-like documents."
  },
  {
    title: "AWS",
    content: "AWS provides cloud computing services and infrastructure for applications."
  }
    ])
    return(
        <store.Provider value={[data, setData]}>
        <Accordion />
        </store.Provider>
    )
}

export default App