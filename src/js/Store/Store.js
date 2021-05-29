import {createStore , compose , applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "../Reducer/index"


const middelwares =[thunk]

const store = createStore(
    rootReducer, 
    compose( 
        applyMiddleware(...middelwares),
        
    )
); 

export default store