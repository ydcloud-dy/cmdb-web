// 验证函数
export function checkName(rule, value, callback) {
  if (value.length < 2) {
    return callback(new Error('输入名称小于2个字符，不符合规范！'))
  } else if (value.length > 253) {
    return callback(new Error('输入名称大于于253个字符，不符合规范！'))
  } else {
    if (!/^[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*$/.test(value)) {
      return callback(new Error('请输入正确的格式, 必须包含小写字母数字字符，\'-\'或\'.\'，并且必须以字母数字字符开头和结尾。'))
    }
    return callback()
  }
}
