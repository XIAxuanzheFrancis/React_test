// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const name = 'Xuanzhe XIA'
//const title = React.createElement('h1',null,'Hello React');
const isLoading = true

const loadData = () =>{
  return isLoading && <div>loading</div>
}
const array = [
  {id: 1, name: 'Xuanzhe'},
  {id: 2, name: 'Xuanzhe2'},
  {id: 3, name: 'Xuanzhe3'},
]
const title = (<h1 className='title' style={{color: 'blue'}}>Hello JSX, {name} {loadData()}<span><ul>{array.map(item=><li key={item.id}>{item.name}</li>)}</ul></span></h1>)

ReactDom.render(title, document.getElementById('root'));