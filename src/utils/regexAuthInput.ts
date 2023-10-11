export function regexEmail(value: string): boolean {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(value) === false) {
    return false;
  }
  return true;
}

export function regexPassword(value: string): boolean {
  let reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (reg.test(value) === false) {
    return false;
  }
  return true;
}

export function regexUserName(value: string): boolean {
  let reg = /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
  if (reg.test(value) === false) {
    return false;
  }
  return true;
}
