import {regexEmail, regexPassword, regexUserName} from './RegexAuthInput';
import {showToast} from './ShowToast';
import {readUser, saveUser, removeUser, readCart, saveCart} from './Storage';
import axiosClient from './Axios';

export {
  regexEmail,
  regexPassword,
  regexUserName,
  showToast,
  readUser,
  saveUser,
  removeUser,
  readCart,
  saveCart,
};
export default axiosClient;
