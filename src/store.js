import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './js/reducers'
import socketMiddleware from './js/socketMiddleware'

let store = createStore(reducer,applyMiddleware(thunk,socketMiddleware))

export default store