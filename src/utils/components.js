/**
 * 这里放了需要全局注册的组件
 */
import MyTableView from '@/components/myTableView' //  表格组件
import TableLayout from '@/components/TableLayout' //  纵向列表三层布局组件
import MenuLayout from '@/components/MenuLayout' //  左右两列布局组件
import TopBack from '@/components/TopBack' //  和宇云返回组件
import PowerStep from '@/components/PowerStep' //  和宇云步骤条
import PowerPage from '@/components/PowerPagination' //  和宇云分页
import formDialog from '@/components/Dialog/formDialog' // 弹窗组件
import FormItems from '@/components/FormItems' // 表单组件

export default (Vue) => {
  Vue.component('MyTableView', MyTableView)
  Vue.component('TableLayout', TableLayout)
  Vue.component('MenuLayout', MenuLayout)
  Vue.component('TopBack', TopBack)
  Vue.component('PowerStep', PowerStep)
  Vue.component('PowerPage', PowerPage)
  Vue.component('formDialog', formDialog)
  Vue.component('FormItems', FormItems)
}
