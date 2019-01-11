import React from 'react';
import SpanMoney from '../span-money';
import './styles.scss';
import PropTypes from "prop-types";

const CartSummary = ({sum = 0}) => (
    <div className={'cart-summary'}>
        <div className={'cart-summary__message'}>
            <span className={'cart-summary__total-label'}>Сумма заказа: </span>
            <SpanMoney value={sum}/>
        </div>
    </div>
);

CartSummary.propTypes = {
    sum: PropTypes.number
};

export default CartSummary;