import React from 'react';
import {LoginForm} from './components/LoginForm';
import {InputIssueForm} from './components/InputIssueForm';
import {IssuesList} from './components/IssuesList';


class App extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
      author: null,
      issues: []
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.loadIssues = this.loadIssues.bind(this);

  }

  render() {
    if (!this.state.author) {
      return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
    } else {    
      return (<div>
        <InputIssueForm author={this.state.author} loadIssues={this.loadIssues}/>
        <IssuesList issues={this.state.issues}/>
      </div>
        );
    }
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    //console.log(document.getElementById('author').value);
    const author = document.getElementById('author').value;
    this.setState({author: author});
    
    this.loadIssues(author);
  }

  loadIssues(author) {
    fetch('https://localhost:44357/api/values?author='+author)
    .then(resp => resp.json())
    .then(data => {
      this.setState({issues: data});
    }); 
  }
  
}

export default App;
