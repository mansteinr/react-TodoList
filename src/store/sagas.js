/**
 * 使用redux-saga时所有的异步请求函数
 * saga文件必须要求时generator函数
 */

import axios from 'axios'
import * as type from './actionTypes'
import * as actions from './actionCreators'
// takeEvery是saga提供的方法
// takeEvery saga接收到了GET_INIT_LIST类型的action 就会执行getInitList
import { takeEvery, put } from 'redux-saga/effects'


function* getInitList() {
  try {
    // 在Generator函数中可以不使用 promise函数 使用下面的形式
    // 将异步转为同步函数 等待ajax请求的结果
    const res = yield axios.get('https://www.easy-mock.com/mock/5b62c926061b7876217a9de3/api/table/high/list')
    const action = actions.initListAction(res.data.result.list)
    // 表示前的处理完成之后 在派发action
    yield put(action)
  } catch(e) {
    // 出错时
    console.log('有问题')
  }
  
  // axios.get('https://www.easy-mock.com/mock/5b62c926061b7876217a9de3/api/table/high/list').then(res => {
  //   const data = res.data.result.list
  //   const action = actions.initListAction(data)
  //   /**
  //    * 因为saga文件中没有store 所以用put方法代替
  //    */
  //   // store.dispatch(action)
  //   put(action)
  // })
}

function* mySaga() {
  yield takeEvery(type.GET_INIT_LIST, getInitList)
}

export default mySaga

/**
 * saga运行流程
 * 
 * 1、首先在index配置saga。根据官网配置，并创建sagas文件，在里面做异步请求处理
 * 
 * 2、当页面或者组件发送action时，reducer和saga文件均能接收到actoin
 * 
 * 3、当saga文件接收到action之后，会做出相应的响应，根据具体的业务派发action,j将action在派发给reducer文件
 *    reducer文件按照程序，执行即可
 */