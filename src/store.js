import { createStore } from 'redux'
import reducer from './js/reducers'

let store = createStore(reducer)

export default store