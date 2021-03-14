import {createStore} from 'redux'
import {SodaReducer} from './sodareducer'

const Store = createStore(SodaReducer)

export default Store