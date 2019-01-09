import C from '../constants';

export const cartProducts = (state = [], action) => {
    switch (action.type) {
        case C.ADD_CART_PRODUCT:
            return [
                ...state,
                cartProduct({}, action)
            ];
        case C.SET_PRODUCT_QUANTITY:
            return state.map(
                p => cartProduct(p, action)
            );
        case C.REMOVE_CART_PRODUCT:
            return state.filter(
                p => p.id !== action.id
            );
        case C.CLEAR_CART_PRODUCTS:
            return [];
        default:
            return state;
    }
};

export const cartProduct = (state = {}, action) => {
    switch (action.type) {
        case C.ADD_CART_PRODUCT:
            return {
                id: action.id,
                img: action.img,
                name: action.name,
                description: action.description,
                price: action.price,
                quantity: action.quantity
            };
        case C.SET_PRODUCT_QUANTITY:
            return (state.id !== action.id) ?
                state :
                {
                    ...state,
                    quantity: action.quantity
                };
        default:
            return state;
    }
};