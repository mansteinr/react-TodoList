import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
// thunk为了方便管理 将项目中所有的异步请求统一管理 所有借助该redux中间件
import thunk from 'redux-thunk'

// https://github.com/zalmoxisus/redux-devtools-extension
// 配置redux插件
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

  const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
  )

// 创建store
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 是供redux调式用的
// https://github.com/zalmoxisus/redux-devtools-extension#usage

const store = createStore(reducer, enhancer)

/**
 *  store 是唯一的
 *  只有store能改变自己 reducer是将数据处理的结果返回给store，然后store才会改变自己
 *  reducer必须是个纯函数（即给定固定的输入，就一定会有固定的输出，而且没有副作用）
 */

export default store