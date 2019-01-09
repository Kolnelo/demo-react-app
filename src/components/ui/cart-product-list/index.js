import React from 'react';
import CartProductItem from '../cart-product-item';
import './styles.scss';

const CartProductList = ({cartProducts = [], onRemoveCartProduct = f => f, onSubtractCartProduct = f => f, onAddCartProduct = f => f}) => (
    <div className={'cart-product-list'}>
        {
            (cartProducts.length > 0) ?
            cartProducts.map( (cProd) =>
                <CartProductItem key={cProd.id}
                                 name={cProd.name}
                                 quantity={cProd.quantity}
                                 price={cProd.quantity * cProd.price}
                                 onRemove={() => onRemoveCartProduct(cProd.id)}
                                 onAdd={() => onAddCartProduct(cProd.id)}
                                 onSubtract={() => onSubtractCartProduct(cProd.id)}
                />
            ) :
            <div className={'cart-product-list__message'}>Корзина пуста</div>
        }
    </div>
);

export default CartProductList;