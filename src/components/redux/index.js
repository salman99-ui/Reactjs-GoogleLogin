import IceReducer from './ice/iceReducer'
import CakeReducer from './cakes/cakeReducer'
import {combineReducers , createStore} from 'redux'
import SodaReducer from '../redux/soda/sodareducer'
const root = combineReducers({
    cake : CakeReducer , 
    ice  : IceReducer ,
    soda : SodaReducer
})

const store = createStore(root)

export default store