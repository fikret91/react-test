import {} from '../actions';


const initialState = {
    author: null,
    issues: []
};

export default function appReducer(state = initialState, action)
{
    switch (action.type) {
        case 'SET_AUTHOR':            
            return Object.assign({}, state, {author: action.author});
        case 'UPDATE_ISSUES':
            return Object.assign({}, state, {issues: action.issues});
        default:
            return state;
    }
}