import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'


// thunk为了方便管理 将项目中所有的异步请求统一管理 所有借助该redux中间件
// 也可以用redux-saga进星异步函数的统一管理
// import thunk from 'redux-thunk'

// https://github.com/zalmoxisus/redux-devtools-extension
// 配置redux插件
// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose

//   const enhancer = composeEnhancers(
//     /**
//      * 使用redux-thunk的时候
//      */
//     // applyMiddleware(thunk)
//   )

// const store = createStore(reducer, enhancer)



/**
 * 使用redux-saga
 * https://github.com/redux-saga/redux-saga
 * 
 */
// 创建中间件
import createSagaMiddleware from 'redux-saga'
// 实际上是引入sagas.js文件中的generator函数 让中间件运行该函数
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

// 创建store
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 是供redux调式用的
// https://github.com/zalmoxisus/redux-devtools-extension#usage

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySaga)
/**
 *  store 是唯一的
 *  只有store能改变自己 reducer是将数据处理的结果返回给store，然后store才会改变自己
 *  reducer必须是个纯函数（即给定固定的输入，就一定会有固定的输出，而且没有副作用）
 */

export default store


// 中间件指的是action和store之间的中间件
// 如果action是对象 会直接传给store 如果是函数 先将函数先执行，在需要调用store的时候再调用store