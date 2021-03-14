const initialdata = {
    numOfSoda : 10 
}

const SodaReducer = (state = initialdata , action) => {
    switch(action.type){
        case "BUY_SODA" :
            return {
                ...state , 
                numOfSoda : state.numOfSoda - action.payload
            }
        case "SELL_SODA" : 
        return {
            ...state ,
            numOfSoda : state.numOfSoda + 1
        }

        default : 
        return state
    }
}

export default SodaReducer 