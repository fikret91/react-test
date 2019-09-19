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
    const { author, issues } = this.state;
    if (!author) {
      return <LoginForm handleLoginSubmit={this.handleLoginSubmit}/>
    } else {    
      return (<div>
        <InputIssueForm author={author} loadIssues={this.loadIssues}/>
        <IssuesList issues={issues}/>
      </div>
        );
    }
  }

  handleLoginSubmit(e, author) {
    e.preventDefault();
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
