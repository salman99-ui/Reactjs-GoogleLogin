import React from 'react'
import {connect } from 'react-redux'
import buyice from '../redux/ice/iceAction'
function iceContainer(props) {
    return (
        <div>
            <h2>numof ice {props.numice} </h2>
            <button onClick={props.buyice}>Buy ice</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numice : state.numOfIce
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyice : () => dispatch(buyice())
    }
}

export default connect(mapStateToProps , mapDispatchToProps ) (iceContainer)
