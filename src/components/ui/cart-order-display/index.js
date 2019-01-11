import React from 'react';
import CartProductList from '../cart-product-list';
import CartSummary from '../cart-summary';
import CartActions from '../cart-actions';
import './styles.scss';
import PropTypes from "prop-types";

const CartOrderDisplay = ({cartProducts = [], onRemoveCartProduct = f => f, onSubtractCartProduct = f => f, onAddCartProduct = f => f, onOrder = f => f, history}) => (
    <div className={'cart-order-display'}>
        <h1 className={'cart-order-display__title'}>Корзина</h1>
        <CartProductList {...{
                              cartProducts,
                              onRemoveCartProduct,
                              onAddCartProduct,
                              onSubtractCartProduct
                         }}
        />
        <CartSummary sum={cartProducts.reduce( (sum, currentProd) => (sum + currentProd.price * currentProd.quantity), 0 )}
        />
        <CartActions onOrder={() => {
                                        onOrder();
                                        history.push('/');
                                    }
                     }
        />
    </div>
);

CartOrderDisplay.propTypes = {
    cartProducts: PropTypes.array.isRequired,
    onRemoveCartProduct: PropTypes.func,
    onSubtractCartProduct: PropTypes.func,
    onAddCartProduct: PropTypes.func,
    onOrder: PropTypes.func,
    history: PropTypes.object
};

export default CartOrderDisplay;