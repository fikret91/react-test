import React from 'react';
import { connect } from 'react-redux';
import { setAuthor, getIssues } from '../redux/actions';

class LoginForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            author: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({author: event.target.value});
    }

    handleLoginSubmit(event) {
        event.preventDefault();
        this.props.setAuthor(this.state.author);
        this.props.getIssues(this.state.author);
    }

    render() {
        return (
            <form onSubmit={this.handleLoginSubmit}>
                <fieldset>
                    <legend>Log in</legend>
                    <div className='form-group'>
                        <label htmlFor='author'>Author: </label>
                        <input type='text' id='author' name='author' required 
                            className='form-control'
                            value={this.state.author}
                            onChange={this.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Log in' className='btn btn-primary'/>
                    </div>
                </fieldset>
            </form>
        );
    }
}

export default connect(null, { setAuthor, getIssues })(LoginForm);