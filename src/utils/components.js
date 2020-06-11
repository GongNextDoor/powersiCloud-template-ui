// 注册全局组件
import Pagination from '@/components/Pagination/default' // ComponentA
import List from '@/components/list/default'
import MyTableView from '@/components/list/myTableView'
import FormDialog from '@/components/dialog/formDialog'
// import ListDialog from '@/components/dialog/formDialog'
import ConditionHeader from '@/components/ConditionHeader'

export default (Vue) => {
  Vue.component('Pagination', Pagination)
  Vue.component('List', List)
  Vue.component('MyTableView', MyTableView)
  Vue.component('FormDialog', FormDialog)
  // Vue.component('ListDialog', ListDialog)
  Vue.component('ConditionHeader', ConditionHeader)
}
