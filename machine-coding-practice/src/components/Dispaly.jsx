import { useContext, useState } from 'react'
import {store} from "../App"

import '../App.css'

const Display = () => {
    const [data, setData] = useContext(store)
    const [product, setProduct] = useState('')

    const addProduct = () => {
        setData(prev => [
            ...prev,
            {
                id: prev ? prev.length + 1 : 1,
                product: product
            }
        ])
        setProduct('')
    }

    const deleteProduct = () => {
        setData(prev => 
           {
             let updatedData = [...prev]
             updatedData.pop()
             return updatedData
           }
        )
    }

    return(
        <div className="display-main">
           <div className='display-component'> 
             {data.map(item => {
                return(
                    <li className='card-li' key={item.id}><strong>{item.id}.{item.product}</strong></li>
                )
            })}
           </div>
           <div className='display-input'>
            <label><strong>Product: </strong></label>
            <input id='input-field' type="text" value={product} onChange={(e) => setProduct(e.target.value)}/><br/>
            <button id='input-field' onClick={addProduct}>Add Product</button>
            <button id='input-field' onClick={deleteProduct}>Delete Product</button>
           </div>
        </div>
    )
}

export default Display