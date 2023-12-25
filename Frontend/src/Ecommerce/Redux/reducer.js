
const initialState = {
    cartCount:0,
 
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CartCount':
         
        return {
            ...state,
            cartCount: action.payload
        };
          
        case 'CartCountAfterDeleted':
         
        return {
            ...state,
            cartCount: action.payload
        };
          
        default:
            return state;
    }
};
