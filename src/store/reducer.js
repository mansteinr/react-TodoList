// reducer 存储所有的数据 可以理解为reducer是个仓库
// store是个管理员 通过store管理reducer里的所有数据

const defaultStore = {
  inputValue: 'rwerw',
  list: ['re', 'ere', '90']
}

export default (state = defaultStore, action) => {
  return state
}