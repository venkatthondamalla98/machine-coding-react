import { useContext } from "react"
import {store} from '../App'

const ContexApiOne = () => {
    const [data, setData] = useContext(store)
    return (
        <div>
            Hello {data}
        </div>
    )
}

export default ContexApiOne