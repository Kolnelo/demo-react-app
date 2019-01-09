import {connect} from 'react-redux';
import ProductList from './ui/product-list';
import ProductsData from './data-components/ProductsData';
import {addCartProduct,
        addCartProductQuantity,
        subtractCartProductQuantity,
        removeCartProduct,
        clearCartProducts
        } from '../actions';
import CartPanel from './ui/cart-panel';
import CartProductList from './ui/cart-product-list';
import CartOrderDisplay from './ui/cart-order-display';

export const Products = connect(
    state =>
        ({
            cartProducts: state.cartProducts
        }),
    dispatch =>
        ({
            onAddProduct: (id) => dispatch(addCartProductQuantity(id, 1)),
            onSubtractProduct: (id) => dispatch(subtractCartProductQuantity(id, 1)),
            onCartProduct: (id) => dispatch(addCartProduct(id, 1))
        })
)(ProductsData(ProductList));

export const NavigationCart = connect(
    state =>
        ({
            cartProducts: state.cartProducts
        })
)(CartPanel);

export const CartProducts = connect(
    state =>
        ({
            cartProducts: state.cartProducts
        }),
    dispatch =>
        ({
            onRemoveCartProduct: (id) => dispatch(removeCartProduct(id)),
            onAddCartProduct: (id) => dispatch(addCartProductQuantity(id, 1)),
            onSubtractCartProduct: (id) => dispatch(subtractCartProductQuantity(id, 1))
        })
)(CartProductList);

export const CartOrder = connect(
    state =>
        ({
            cartProducts: state.cartProducts
        }),
    dispatch =>
        ({
            onRemoveCartProduct: (id) => dispatch(removeCartProduct(id)),
            onAddCartProduct: (id) => dispatch(addCartProductQuantity(id, 1)),
            onSubtractCartProduct: (id) => dispatch(subtractCartProductQuantity(id, 1)),
            onOrder: () => dispatch( clearCartProducts() )
        })
)(CartOrderDisplay);


