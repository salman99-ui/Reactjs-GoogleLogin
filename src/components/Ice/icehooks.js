import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import Buyice from '../redux/ice/iceAction'
function IceHooks() {
    const data = useSelector(state => state.ice.numOfIce)
    const dispacth = useDispatch()
    return (
        <div>
            <h2>NumOfCakes { data } </h2>
            <button onClick={ () => dispacth(Buyice())} >BUY ICE</button>
        </div>
    )
}

export default IceHooks
