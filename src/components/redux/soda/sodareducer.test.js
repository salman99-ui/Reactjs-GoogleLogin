const initialdata = {
    numOfSoda : 10 
}

const SodaReducer = (state = initialdata , action) => {
    switch(action.type){
        case "BUY_SODA" :
            return {
                ...state , 
                numOfSoda : state.numOfSoda - 1 
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



describe("Soda Reducer" , () => {
    it("Cek Buy Soda dengan initial state = 10 menjadi 9" , () => {
        expect(SodaReducer(initialdata , {
            type : "BUY_SODA"
        }).numOfSoda).toBe(9)
    })
})