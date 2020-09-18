/**
 * 这里放了正则表达式
 */

export default {
  regHost: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/{0,1})/, // 域名
  regIP: /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/, // ip
  regPositiveint: /^[1-9]\d*$/ // 大于0的正整数
}
