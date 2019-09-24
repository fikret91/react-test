import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';

class App extends React.Component
{
    render() {
      if (!this.props.author) {
        return <Redirect to='/login' />;
      } else {
        return <Redirect to='/issues' />;
      }
    }  
}



const mapStateToProps = state => {
  return {
    author: state.author
  };
};

export default connect(mapStateToProps)(App);
