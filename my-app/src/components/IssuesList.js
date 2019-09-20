import React from 'react';
import { connect } from "react-redux";

class IssuesList extends React.Component
{    
    render() {
        const issuesDivs = this.props.issues.map(x => 
        <div className='card' key={x.id}>
            <div className='card-body'>
                <h5 className='card-title'>Author: {x.author}</h5>
                <p>{x.message}</p>
            </div>
            <div className='card-footer'>
                Created at: {x.createdDttm}
            </div>
        </div>);
        return issuesDivs;
    }
}

const mapStateToProps = state => {
    return {
      issues: state.issues
    };
};

export default connect(mapStateToProps)(IssuesList);