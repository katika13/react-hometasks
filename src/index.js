import React from 'react'
import ReactDOM from 'react-dom';
import 'styles/index.scss';

//import HelloWorld from 'components/HelloWorld'
import App from 'App'
// const user = { name: 'Vasia' }
//
// const logUser = (userName) => {
//   console.log(userName)
//}
//
// ReactDOM.render(
//   <React.StrictMode>
//     <HelloWorld userName={user.name} logUser={logUser} />
//   </React.StrictMode>
ReactDOM.render(
<React.StrictMode>
  <App />
</React.StrictMode>
  ,
  document.getElementById('root')
);
