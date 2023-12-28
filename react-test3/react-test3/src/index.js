import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


//1.
// class App extends React.Component {
//   handleClick(){
//     console.log('i‘m clicked')
//   }
//   render() {
//     return(
//       <button onClick={this.handleClick}>click me!!!</button>
//     )
//   }
// }


//2.
// function App(){
//   function handleClick(){
//     console.log(' i’m clicked')
//   }
//   return(
//     <button onClick={handleClick}>click me</button>
//   )
// }

// 3.
// class App extends React.Component{
//   handleClick(e){
//     e.preventDefault();123wsd88
//     console.log('i am clicked')
//   }
//   render(){
//     return(
//       <a onClick={this.handleClick} href='https://www.linkedin.com/in/xuanzhe-xia-193525257/'>link</a>
//     )
//   }
// }

class App extends React.Component{
  // constructor(){
  //   super()
  //   this.state={
  //     count: 0
  //   }
  // }

  state={
    count: 0
  }
  Increment() {
    this.setState({count: this.state.count+1})
  }
  render(){
    return(
      <div>
        <h1>counter: {this.state.count}</h1>
        {/* <button onClick={()=>{this.setState({count: this.state.count+1})}}>+1</button> */}
        <button onClick={()=>this.Increment()}>+1</button>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'))
