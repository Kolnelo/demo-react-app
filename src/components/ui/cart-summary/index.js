import React from 'react';
import SpanMoney from '../span-money';
import './styles.scss';

const CartSummary = ({sum = 0}) => (
    <div className={'cart-summary'}>
        <div className={'cart-summary__message'}>
            <span className={'cart-summary__total-label'}>Сумма заказа: </span>
            <SpanMoney value={sum}/>
        </div>
    </div>
);

export default CartSummary;