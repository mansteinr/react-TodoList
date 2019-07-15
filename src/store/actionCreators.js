/**
 * 统一创建管理actions 方便管理
 */

import * as types from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  value
})

export const getHanleBtnClickAction = () => ({
  type: types.ADD_TODO_ITEM
})

export const getHandleItemAction = (index) => ({
  type: types.DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: types.INIT_LIST_ACTION,
  data
})

// 使用redux之后 可以return一个函数，在函数里面做异步操作，如请求
// 之前只能return一个对象
// 这个函数可以接收到参数 dispatch 这样就不用利用store派发action
/**
 * 这是使用redux-thunk的写法
 */
// export const getTodoList = () => {
//   return (dispatch) => {
//     axios.get('https://www.easy-mock.com/mock/5b62c926061b7876217a9de3/api/table/high/list').then(res => {
//       const data = res.data.result.list
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }


// saga写法

export const getInitList = () => ({
  type: types.GET_INIT_LIST

})