import { useContext } from "react"
import {store} from "../App"

import "../App.css"

const Accordion = () => {
    const [data, setData] = useContext(store)
    return(
        <div>
            {
                data.map((item, index) => {
                    return <div key={index}>
                        <button className="accordion-title">{item.title}</button>
                        <div className="accordion-content">{item.content}</div>
                        </div>
                })
            }
        </div>
    )
}

export default Accordion