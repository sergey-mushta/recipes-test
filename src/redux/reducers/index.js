const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEWS': {
            console.log('getnews called');
            return {...state, loading: true};
        }
        case 'NEWS_RECEIVED': {
                console.log(action);
                return {...state, news: action.json[0], loading: false}
            }
        default:
            return state;
    }
};

export default reducer;