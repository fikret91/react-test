import React from 'react';
import { connect } from 'react-redux';
import { postIssue } from '../redux/actions';

class InputIssueForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = {
            message: this.state.value,
            author: this.props.author
        };

        this.props.postIssue(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Send an issue</legend>
                    <div className='form-group'>
                        <label htmlFor='message'>Message text:</label>
                        <textarea id='message' name='message' className='form-control' 
                        value={this.state.value}
                        onChange={this.handleChange} />
                    </div>

                    <div className='form-group'>
                        <input type='submit' value='Report an issue' className='btn btn-primary'/>
                    </div>
                </fieldset>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
      author: state.author
    };
};

export default connect(mapStateToProps, { postIssue })(InputIssueForm);