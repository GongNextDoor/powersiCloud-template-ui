/**
 * 这里放了需要全局注册的组件
 */
import MyTableView from '@/components/myTableView' //  表格组件
import TableLayout from '@/components/TableLayout' //  纵向列表三层布局组件
import MenuLayout from '@/components/MenuLayout' //  横向菜单两层组件

export default (Vue) => {
  Vue.component('MyTableView', MyTableView)
  Vue.component('TableLayout', TableLayout)
  Vue.component('MenuLayout', MenuLayout)
}
