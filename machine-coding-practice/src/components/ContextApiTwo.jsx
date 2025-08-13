import { useContext } from "react"
import {store} from '../App'

const ContexApiTwo = () => {
    const [data, setData] = useContext(store)
    return (
        <div>
            Hello 2 {data}
        </div>
    )
}

export default ContexApiTwo