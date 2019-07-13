import { createStore } from 'redux'
import reducer from './reducer'

// 创建store
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 是供redux调式用的
// https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/**
 *  store 是唯一的
 *  只有store能改变自己 reducer是将数据处理的结果返回给store，然后store才会改变自己
 *  reducer必须是个纯函数（即给定固定的输入，就一定会有固定的输出，而且没有副作用）
 */

export default store