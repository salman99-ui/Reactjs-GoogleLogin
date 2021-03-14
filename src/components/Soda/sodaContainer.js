import React , {useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import buySoda  from '../redux/soda/sodaaction'
function SodaContainer() {
    const dispacth = useDispatch()
    const Data = useSelector( state => state.soda.numOfSoda )
    const [nilai , setNilai ] = useState(0)
    return (
        <div>
            <h2>Banyak Minuman Soda {Data}</h2>
            <input onChange={(e) => setNilai(e.target.value)} />
            <button onClick={() => dispacth(buySoda(nilai))}>BUY SODA</button>
        </div>
    )
}

export default SodaContainer
