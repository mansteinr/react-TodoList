/**
 * 统一创建管理actions 方便管理
 */

import * as types from './actionTypes'

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
