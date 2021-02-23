const initialState = {
    projects: [
        {
            id: '1',
            title: 'Help me find peach',
            content: 'blah blah blah'
        },
        {
            id: '2',
            title: 'Collect all the stars',
            content: 'blah blah blah'
        },
        {
            id: '3',
            title: 'Egg hunt with youshi',
            content: 'blah blah blah'
        }
    ]
};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('Created project:', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Created project error:', action.project);
            return state;
        default:
            return state;
    }
}

export default projectReducer;