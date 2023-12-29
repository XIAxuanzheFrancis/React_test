import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  constructor(){
    super()
    this.inputref=React.createRef()
  }
  render(){
    return(
      <div>
        <input type='text' ref={this.inputref}></input>
        <button onClick={()=>{console.log('the value of the text is:',this.inputref.current.value)}}>Get the value of the text box</button>
      </div>
    )
  }
}  

ReactDOM.render(<App/>, document.getElementById('root'))
