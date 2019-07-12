import { createStore } from 'redux'
import reducer from './reducer'

// 创建store
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 是供redux调式用的
// https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store