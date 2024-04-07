// import {LOGIN_ACTION_KEY} from '../constant';
// export const LoginAction = (payload) => (dispatch, getState)=>{
// return new Promise((resolve, reject) =>{
// setTimeout(() => {
//         let result ={...payload}
//         let date = new Date();
//         result.date = date.toDateString();
//         result._id = Math.random();
//         dispatch({ type: LOGIN_ACTION_KEY, payload: result });
//         resolve({success:true})
//     }, 
//     3000);
// });
// }

// import axios from 'axios';
// import { LOGIN_ACTION_KEY } from '../constant';

// export const LoginAction = (payload) => (dispatch, getState) => {
//   return new Promise((resolve, reject) => {
//     axios.post('http://localhost:8000/user/authenticate', payload)
//       .then(response => {
//         const result = { ...response.data };
//         result.date = new Date().toDateString();
//         result._id = Math.random();
//         dispatch({ type: LOGIN_ACTION_KEY, payload: result });
//         resolve({ success: true });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//         reject({ success: false, error: error.message });
//       });
//   });
// };

// import axios from 'axios';
import { LOGIN_ACTION_KEY } from '../constant';
export const LoginAction = (payload) => (dispatch, getState) => {
  const result = { ...payload };
  result.date = new Date().toDateString();
  result._id = Math.random();
  dispatch({ type: LOGIN_ACTION_KEY, payload: result });
  return Promise.resolve({ success: true });
};
