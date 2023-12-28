import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component{
  state = {
    txt: '',
    content: '',
    city: 'Paris',
    isChecked: false
  }

  handleForm=(e)=>{
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({[name] : value})
  }

  handleChecked=(e)=>{
    this.setState({isChecked: e.target.checked})
  }

  render(){
    return(
      <div>
      <div>
        <input type="text" name='txt' value={this.state.txt} onChange={this.handleForm}/>
      </div>
      <div>
        <textarea type="text" name='content' value={this.state.content} onChange={(e)=>{this.setState({content: e.target.value})}} />
      </div>
        <select name='city' value={this.state.city} onChange={e=>{this.setState({city: e.target.value})}}>
          <option value="cf">clermont-ferrand</option>
          <option value="Paris">paris</option>
          <option value="Lyon">lyon</option>
        </select>
        <input name='isChecked' type='checkbox' checked={this.state.isChecked} onChange={this.handleForm}></input>
      </div>
      )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
