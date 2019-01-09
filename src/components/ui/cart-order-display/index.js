import React from 'react';
import CartProductList from '../cart-product-list';
import CartSummary from '../cart-summary';
import CartActions from '../cart-actions';

const CartOrderDisplay = ({cartProducts = [], onRemoveCartProduct = f => f, onSubtractCartProduct = f => f, onAddCartProduct = f => f, onOrder = f => f, history}) => (
    <div className={'cart-order-display'}>
        <h1>Корзина</h1>
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

export default CartOrderDisplay;