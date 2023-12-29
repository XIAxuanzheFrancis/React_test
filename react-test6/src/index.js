import React from 'react';
import ReactDOM from 'react-dom';

// const App = (props) => {
//   return(
//     <div>
//       <h1>props: {props.name}, {props.age}</h1>
//     </div>
//   )
// }

class App extends React.Component {
  render(){
    console.log('props:', this.props)
    return(
      <div>
        <h1>props: {this.props.name}, {this.props.age}</h1>
        this.props.fn()
        this.props.tag
      </div>
    )
  }
}

ReactDOM.render(<App name='xiaxuanzhe' age={22} color={['red','yellow']} fn={()=>{console.log("this is a fonction")}} tag={<p>it's p</p>}/>, document.getElementById('root'))