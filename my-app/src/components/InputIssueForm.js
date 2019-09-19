import React from 'react';

export class InputIssueForm extends React.Component
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

    handleSubmit(e) {
        e.preventDefault();
        const data = {
            message: this.state.value,
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
                        <textarea id='message' name='message' 
                        value={this.state.value}
                        onChange={this.handleChange} />
                    </p>

                    <p>
                        <input type='submit' value='Report an issue' />
                    </p>
                </fieldset>
            </form>
        );
    }
}