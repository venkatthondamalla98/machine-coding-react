import { useContext } from "react"
import { store } from "../App"

import '../App.css'

const Cart = () => {
    const [data, setData] = useContext(store)
    return(
        <div className="cart-card">
           Cart: {data.length}
        </div>
    )
}

export default Cart