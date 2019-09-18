import React from 'react';

export class LoginForm extends React.Component
{

    render() {
        return (
            <form onSubmit={this.props.handleLoginSubmit}>
                <fieldset>
                    <legend>Log in</legend>
                    <p>
                        <label htmlFor='author'>Author: </label>
                        <input type='text' id='author' name='author' required/>
                    </p>
                    <p>
                        <input type='submit' value='Log in' />
                    </p>
                </fieldset>
            </form>
        );
    }
}