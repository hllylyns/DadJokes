import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Header from './Components/Header/header.js';
import NewJoke from './Components/NewJoke';
import MyOwnJokes from './Components/MyOwnJokes';
import SaveToFaves from './Components/SaveToFaves';


class App extends Component {
  constructor(){
    super();

    this.state = {
      joke: '',
      write:'',
  
      myjokes: []
    }
  this.handleSaveiCanHazJoke = this.handleSaveiCanHazJoke.bind(this); 
  this.handleWriteJoke = this.handleWriteJoke.bind(this);
  this.handleGetNewJoke= this.handleGetNewJoke.bind(this);
  this.handleDeleteJoke= this.handleDeleteJoke.bind(this); 
  this.handleEditJoke=this.handleEditJoke.bind(this);
  }
  componentDidMount(){
    this.handleGetNewJoke();
    axios.get('/api/jokes').then(res=>{
      // let myjokes = res.data.map( (e)=> e.text);
      this.setState({ myjokes: res.data });
    })
  }
  handleGetNewJoke(){
    axios.get('https://icanhazdadjoke.com/slack').then(res=>{
      console.log(res.data.attachments[0].text);
      this.setState({joke:res.data.attachments[0].text});
    });
  }
  handleWriteJoke(write) {
    axios.post('/api/jokes', {text:write}).then(res=>{//axios.post
      // let myjokes = res.data.map( (e)=> e.text);
      this.setState({ myjokes : res.data});
    });
    } 
  handleSaveiCanHazJoke() {
    axios.post('/api/jokes', {text: this.state.joke}).then(res=>{
    // let myjokes = res.data.map( (e)=> e.text);
    this.setState({ myjokes:res.data });
    });
  }
  handleDeleteJoke(){
      axios.delete('/api/jokes').then(res=>{
      console.log('deleting joke');
      this.setState({savedjokes:[],myjokes:[]});
    });
  }
  handleEditJoke(id, text){
      axios.put(`/api/jokes/${id}`, {text}).then(res=>{
      console.log('editing joke');
      let myjokes = res.data.map( (e)=> e.text);
      this.setState({ myjokes });
    });
  }

  render() {
    
    return (
      <div className="App">
      <div>
        <Header  myHeader={'https://www.rom.on.ca/sites/default/files/blog_post/thumbnail/sandals-and-socks_1112776a.jpg'} className="header-photo-frame"/>
      </div>
      <div className="joke-display">
        <h2>{this.state.joke}</h2>
      </div>
      <div>
        <button onClick={this.handleGetNewJoke} id="button-specific">New</button>
        <SaveToFaves save={this.handleSaveiCanHazJoke}/>
        <NewJoke add={this.handleWriteJoke}/>
      </div>
        <div className="list-of-jokes">
        <MyOwnJokes morejokes={this.state.myjokes} handleUpdate={this.handleEditJoke}/>
       <button onClick={this.handleDeleteJoke} className="clear-button">Clear</button>
        </div>
        
      </div>
    );
  }
}

export default App;
 
//rgba(22,22,22,0.5)  (0.1-1.0)