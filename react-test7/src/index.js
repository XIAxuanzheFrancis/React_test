import React from 'react';
import ReactDOM from 'react-dom';


//1
// class Parent extends React.Component {
//   state={
//     name: 'xiaxuanzhe'
//   }
//   render(){
//     return(
//       <div style={{color:'red'}}>
//        <Child name={this.state.name}/>
//       </div>
//     )
//   }
// }

// const Child = (props) =>{
//   return(
//     <h1 style={{background: 'blue'}}>
//       hello baby {props.name}
//     </h1>
//   )
// }


//2
// class Parent extends React.Component{
//   getChildMsg=(data)=>{
//     console.log("Accepting subcomponent data:",{data})
//   }
//   render(){
//     return(
//       <div style={{background:'red'}}>
//         Parent
//         <Child getMsg={this.getChildMsg}/>
//       </div>
//     )
//   }
// }

// class Child extends React.Component{
//   state={
//     msg: 'tiktok'
//   }
//   render(){
//     return(
//       <div style={{background:'blue'}}>
//         Child
//         <button onClick={()=>{this.props.getMsg(this.state.msg)}}>Click me</button>
//       </div>
//     )
//   }
// }

class Counter extends React.Component{
  state = {
    count: 0
  }

  onIncrement=()=>{
    return(this.setState({count: this.state.count+1}))
  }

  render(){
    return(
      <div>
        <Child1 count={this.state.count}/>
        <Child2 onIncrement={this.onIncrement}/>
      </div>
    )
  }
}

const Child1=(props)=>{
  return <h1>counter: {props.count}</h1>
}

const Child2=(props)=>{
  return <button onClick={()=>props.onIncrement()}>+1</button>
}

ReactDOM.render(<Counter/>, document.getElementById('root'))


// ReactDOM.render(<Parent/>, document.getElementById('root'))


