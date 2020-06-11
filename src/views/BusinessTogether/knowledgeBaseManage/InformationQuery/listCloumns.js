export default [
  { type: 'index', label: '序号', width: '50px' },
  { prop: 'nameCode', label: '主题', width: '300px', align: 'center' },
  { prop: 'nameCode', label: '关键字', align: 'center' },
  { prop: 'code', label: '发布单位', align: 'center' },
  { prop: 'code', label: '发布人', align: 'center' },
  { prop: 'nameCode', label: '发布日期', align: 'center' },
  { type: 'custom', slotName: 'collection', label: '收藏', align: 'center', width: '80px' },
  { prop: 'code', label: '浏览次数', align: 'center' },
  { type: 'operation', label: '操作', fixed: 'right', width: '120px' }
]
