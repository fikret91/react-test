import React from 'react';

export class LoginForm extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <form onSubmit={e => this.props.handleLoginSubmit(e, this.state.value)}>
                <fieldset>
                    <legend>Log in</legend>
                    <p>
                        <label htmlFor='author'>Author: </label>
                        <input type='text' id='author' name='author' required 
                            value={this.state.value}
                            onChange={this.handleChange}/>
                    </p>
                    <p>
                        <input type='submit' value='Log in' />
                    </p>
                </fieldset>
            </form>
        );
    }
}