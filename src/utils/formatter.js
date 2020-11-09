// 핸드폰 번호 포멧팅
export function formatTelNo(str) {
  if (str) {
    if (str.length === 10) {
      return str.substr(0, 3) + '-' + str.substr(3, 3) + '-' + str.substr(6, 4)
    } else {
      return str.substr(0, 3) + '-' + str.substr(3, 4) + '-' + str.substr(7, 4)
    }
  } else {
    return ''
  }
}

// 가격요소에 콤마 추가
export function addComma(str) {
  const reg = /^[0-9]+$/
  if (reg.test(str)) {
    const regexp = /\B(?=(\d{3})+(?!\d))/g
    return str.toString().replace(regexp, ',')
  } else {
    return str
  }
}

// 가격 요소에 콤마 제거
export function removeComma(str) {
  return str.replace(/,/gi, '')
}

 // 전화번호 포멧팅
export function addHyphen(str) {
  if (str !== undefined && str.length === 9) {
    if (str.substr(0, 2) === '02') {
      return str.substr(0, 2) + '-' + str.substr(2, 3) + '-' + str.substr(5, 3)
    } else {
      return str
    }
  } else if (str !== undefined && str.length === 10) {
    if (str.substr(0, 2) === '02') {
      return str.substr(0, 2) + '-' + str.substr(2, 4) + '-' + str.substr(6, 4)
    } else {
      return str.substr(0, 3) + '-' + str.substr(3, 3) + '-' + str.substr(6, 4)
    }
  } else if (str !== undefined && str.length === 11) {
    return str.substr(0, 3) + '-' + str.substr(3, 4) + '-' + str.substr(7, 4)
  } else {
    return str
  }
}

// jwt
export function parseJwt(token) {
  var base64Url = token.split('.')[1]
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
  }).join(''))

  return JSON.parse(jsonPayload)
}




