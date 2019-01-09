import React from 'react';
import SpanMoney from '../span-money';
import './styles.scss';
import {Link} from 'react-router-dom';

const CartPanel = ({ cartProducts = []}) => {
    const totalPrice = cartProducts.reduce(
        (sum, currentP) => sum + currentP.price * currentP.quantity,
        0
    );
    const totalQuantity = cartProducts.reduce(
        (quantity, currentP) => quantity + currentP.quantity,
        0
    );

    return (
        <div className={'cart-panel'}>
            <div className={'cart-panel__row'}>
                <div className={'cart-panel__score-cell'}>
                    <SpanMoney
                        value={totalPrice}
                    />
                    <div className={'cart-panel__products-count'}>{`${totalQuantity} товар`}</div>
                </div>
                <div className={'cart-panel__button-cell'}>
                    <Link to={'/cart'} className={'btn btn-primary'}>Корзина</Link>
                </div>
            </div>
        </div>
    );
}

export default CartPanel;