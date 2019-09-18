import React from 'react';

export class InputIssueForm extends React.Component
{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            message: document.getElementById('message').value,
            author: this.props.author
        };

        fetch('https://localhost:44357/api/values', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            this.props.loadIssues(this.props.author);
        });
    }

    render() {
        return (
            <form method='POST' onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Send an issue</legend>
                    <p>
                        <label htmlFor='message'>Message text:</label>
                        <textarea id='message' name='message' />
                    </p>

                    <p>
                        <input type='submit' value='Report an issue' />
                    </p>
                </fieldset>
            </form>
        );
    }
}