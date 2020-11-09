
// Account fommater
// 이메일 형식 체크
export function emailValidationCheck(email) {
  if (/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/.test(email)) {
    return true
  } else {
    return false
  }
}
// 비밀번호 체크
export function pwdValidationCheck(pwd) {
  // 비밀번호는 8~20자리 숫자+영문+특수문자  
  const regExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,20}$/

  if (!regExp.test(pwd)) {
    // 유효하지 않은 비밀번호
    return false
  } 
  return true
}
