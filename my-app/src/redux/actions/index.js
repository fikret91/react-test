

export function setAuthor(author) {
    return {
        type: 'SET_AUTHOR',
        author
    };
}   

export function updateIssues(issues) {
    return {
        type: 'UPDATE_ISSUES',
        issues
    };
}

export function postIssue(issue) {
    return dispatch => {
        return fetch('https://localhost:44357/api/values', {
            method: 'POST',
            body: JSON.stringify(issue),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(data => {
            dispatch(getIssues(issue.author));
        });
    };
}

export function getIssues(author) {
    return dispatch => {
        return fetch(`https://localhost:44357/api/values?author=${author}`)
            .then(resp => resp.json())
            .then(data => {
                dispatch(updateIssues(data));
            });
    };
}
