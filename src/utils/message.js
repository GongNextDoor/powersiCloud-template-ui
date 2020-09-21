/**
 * 这里放了封装的几个element的提示组件
 */

import { MessageBox, Message } from 'element-ui'

/**
 * @author 封装 element-ui 确认框弹框
 * @param text
 * @param type
 * @returns {Promise}
 */
export function handleConfirm(text = '确定执行此操作吗？', type = 'danger') {
  return MessageBox.confirm(`<div class="myalert-header">操作提醒</div><div class="myalert-content">${text}</div></div>`, {
    confirmButtonText: '确定',
    dangerouslyUseHTMLString: true,
    cancelButtonText: '取消',
    type: 'warning'
  })
}

/**
 * @author 封装 element-ui 成功消息提示
 * @param text
 * @param type
 * @returns {Promise}
 */
export function msgSuccess(msg = '操作成功', type = 'success') {
  return Message({
    type: 'success',
    dangerouslyUseHTMLString: true,
    message: `<p>${msg}</p>`,
    duration: 1000
  })
}
/**
 * @author 封装 element-ui 失败消息提示
 * @param text
 * @param type
 * @returns {Promise}
 */
export function msgError(msg = '操作失败', type = 'success') {
  return MessageBox.alert(`<div class="myalert-header">操作失败</div>
    <div class="myalert-content">${msg}</div>`, {
    dangerouslyUseHTMLString: true, confirmButtonText: '确定',
    type: 'error'
  })
}
