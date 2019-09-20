import React from 'react';
import LoginForm from './components/LoginForm';
import InputIssueForm from './components/InputIssueForm';
import IssuesList from './components/IssuesList';
import { connect } from "react-redux";

class App extends React.Component
{
    render() {
      if (!this.props.author) {
        return <LoginForm />
      } else {    
        return (<div>
          <InputIssueForm />
          <IssuesList />
        </div>
          );
      }
    }  
}



const mapStateToProps = state => {
  return {
    author: state.author
  };
};

export default connect(mapStateToProps)(App);
