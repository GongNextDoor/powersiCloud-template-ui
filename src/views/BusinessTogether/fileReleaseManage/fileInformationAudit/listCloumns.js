export default [
  { type: 'selection' },
  { type: 'index', label: '序号', width: '55px' },
  { prop: 'code', label: '主题词', align: 'center' },
  { prop: 'nameCode', label: '发布级别', align: 'center' },
  { prop: 'nameCode', label: '文号', align: 'center' },
  { prop: 'code', label: '印发日期', align: 'center' },
  { prop: 'nameCode', label: '开始日期', align: 'center', expand: true },
  { prop: 'nameCode', label: '结束日期', align: 'center', expand: true },
  { prop: 'code', label: '内容主体', width: '400', align: 'center' },
  { prop: 'nameCode', label: '审核状态', align: 'center' },
  { type: 'operation', label: '操作', fixed: 'right', width: '100px' }
]
