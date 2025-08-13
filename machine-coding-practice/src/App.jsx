import {useState, createContext} from 'react'
import Cart from './components/cart'
import Display from './components/Dispaly'

import './App.css'

export const store = createContext()

const App = () => {
  const [data, setData] = useState([
    {
      id: 1,
      product: "iphone",
      price: 150000,
      releasedYear: 2024
    },
     {
      id: 2,
      product: "Realme",
      price: 15000,
      releasedYear: 2025
    },
     {
      id: 3,
      product: "MI",
      price: 10000,
      releasedYear: 2023
    }
  ])
  return (
   <div>
     <store.Provider value={[data, setData]}>
      <div> <Cart /> </div>
      <div> <Display /> </div>
    </store.Provider>
   </div>
  )
}

export default App