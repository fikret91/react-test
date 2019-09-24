import React from 'react';
import { connect } from "react-redux";
import DataGrid, {Paging, Pager, Grouping, Column } from 'devextreme-react/data-grid';

class IssuesList extends React.Component
{    
    render() {
        /*
        const issuesDivs = this.props.issues.map(x => 
        <div className='card mt-3 border-dark' key={x.id}>
            <div className='card-body'>
                <h5 className='card-title'>Author: {x.author}</h5>
                <p className='card-text'>{x.message}</p>
            </div>
            <div className='card-footer'>
                Created at: {x.createdDttm}
            </div>
        </div>);
        return issuesDivs;
        */
       return (
        <DataGrid 
            dataSource={this.props.issues}
            //defaultColumns={['id', 'author', 'message', 'createdDttm']}
            showBorders={true}
        >
            <Grouping />
            <Paging defaultPageSize={5} />
            <Pager
            showPageSizeSelector={true}
            allowedPageSizes={[5, 10, 20]}
            showInfo={true} />


          <Column dataField={'id'} />
          <Column dataField={'author'} />
          <Column dataField={'message'} />
          <Column dataField={'createdDttm'} dataType='date'/>
        </DataGrid>
        );
    }
}

const mapStateToProps = state => {
    return {
      issues: state.issues
    };
};

export default connect(mapStateToProps)(IssuesList);