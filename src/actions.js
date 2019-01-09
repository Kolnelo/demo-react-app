import C from './constants';
import {PRODUCTS} from './data';

//эмулирую общение с сервером
const fetchThenDispatch = (dispatch, url, method, body) => {
    setTimeout(
        () => {
            const jsonBody = body && JSON.parse(body);
            const store = JSON.parse(window.localStorage.getItem('redux-store')) || {cartProducts: []};
            const id = url.slice(17);
            const product = jsonBody && PRODUCTS.find(p => p.id === jsonBody.id);
            const cartProduct = store.cartProducts.find(cP => cP.id === id);
            const deleteCartProduct = () => {
                dispatch({
                    type: C.REMOVE_CART_PRODUCT,
                    id
                });
            }

            switch (method) {
                case 'POST':
                    if(store.cartProducts.find(cP => cP.id === jsonBody.id)) return;
                    dispatch({
                        type: C.ADD_CART_PRODUCT,
                        id: jsonBody.id,
                        img: product.img,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        quantity: jsonBody.quantity
                    });
                    return;
                case 'PUT':
                    if(cartProduct === undefined) return;
                    if(jsonBody && jsonBody.type) {
                        switch (jsonBody.type) {
                            case 'add':
                                dispatch({
                                    type: C.SET_PRODUCT_QUANTITY,
                                    id,
                                    quantity: cartProduct.quantity + jsonBody.quantity
                                });
                                return;
                            case 'subtract':
                                if(cartProduct.quantity - jsonBody.quantity < 1){
                                    deleteCartProduct();
                                    return;
                                }
                                dispatch({
                                    type: C.SET_PRODUCT_QUANTITY,
                                    id,
                                    quantity: cartProduct.quantity - jsonBody.quantity
                                });
                                return;
                            default:
                                break;
                        }
                    }
                    //изменяем количество продуктов или удаляем
                    if (jsonBody.quantity > 0) {
                        dispatch({
                            type: C.SET_PRODUCT_QUANTITY,
                            id,
                            ...jsonBody
                        });
                    } else {
                        deleteCartProduct();
                    }
                    return;
                case 'DELETE':
                    if ( ~url.indexOf('/api/cartProducts') )
                        dispatch({
                            type: C.CLEAR_CART_PRODUCTS
                        });
                    deleteCartProduct();
                    return;
                default:
                    return;
            }
        },
        200
    );
}

export const addCartProduct = (id, quantity) =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            '/api/cartProducts',
            'POST',
            JSON.stringify({id, quantity})
            );
    }

export const setCartProductQuantity = (id, quantity) =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            `/api/cartProduct/${id}`,
            'PUT',
            JSON.stringify({quantity})
            );
    }

export const addCartProductQuantity = (id, quantity) =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            `/api/cartProduct/${id}`,
            'PUT',
            JSON.stringify({quantity, type: 'add'})
        );
    }

export const subtractCartProductQuantity = (id, quantity) =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            `/api/cartProduct/${id}`,
            'PUT',
            JSON.stringify({quantity, type: 'subtract'})
        );
    }

export const removeCartProduct = (id) =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            `/api/cartProduct/${id}`,
            'DELETE'
        );
    }

export const clearCartProducts = () =>
    (dispatch) => {

        fetchThenDispatch(
            dispatch,
            `/api/cartProducts`,
            'DELETE'
        );
    }