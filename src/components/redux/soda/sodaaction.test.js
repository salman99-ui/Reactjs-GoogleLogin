


const buySoda = () => {
    return {
        type : "BUY_SODA"
    }
}

test("Test Action Soda" , () => {
    expect(buySoda().type).toBe("BUY_SODA")
})