const initialState = [];

const portfolioReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PORTFOLIO_ITEM':
            return [...state, action.payload];
        case 'REMOVE_PORTFOLIO_ITEM':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
};

export default portfolioReducer;
