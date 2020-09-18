/**
 * 这里放了需要全局注册的组件
 */
import MyTableView from '@/components/myTableView' //  表格组件

export default (Vue) => {
  Vue.component('MyTableView', MyTableView)
}
