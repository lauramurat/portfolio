export const addPortfolioItem = item => ({
    type: 'ADD_PORTFOLIO_ITEM',
    payload: item,
});

export const removePortfolioItem = id => ({
    type: 'REMOVE_PORTFOLIO_ITEM',
    payload: id,
});
