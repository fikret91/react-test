import React from 'react';

export class IssuesList extends React.Component
{
    
    render() {
        const issuesDivs = this.props.issues.map(x => 
        <div className='issue' key={x.id}>
            <h3>{x.author}</h3>
            <p>{x.message}</p>
            <span className='datetime'>{x.createdDttm}</span>
        </div>);
        return issuesDivs;
    }
}