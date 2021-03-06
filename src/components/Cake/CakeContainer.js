import React from 'react'
import { connect } from 'react-redux'

import buycake from '../redux/cakes/cakeAction'
function CakeContainer(props) {
    return (
 
        <div >
            <h2>Number Of Cakes {props.numOfCakes}</h2>
            <button onClick={props.buycake}>Buy Cake</button>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buycake : () => dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
