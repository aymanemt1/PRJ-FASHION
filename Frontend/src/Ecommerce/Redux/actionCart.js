export const CartCount = (count) => {
    return {
        type: 'CartCount',
        payload:count
       
    };
};
export const CartCountAfterDeleted = (newcount) => {
    return {
        type: 'CartCountAfterDeleted',
        payload:newcount
       
    };
};


