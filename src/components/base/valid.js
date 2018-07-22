// 判断输入的值是否为数字
function isValueNumber (value) {
  var reg = /^[0-9]+.?[0-9]*$/
  if (reg.test(value)) {
    return true
  }
  return false
}
// 切记将此函数暴露，否则无法调用
export {
  isValueNumber
}