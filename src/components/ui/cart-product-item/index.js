import React from 'react';
import './styles.scss';
import SpanMoney from '../span-money';
import CountControl from '../count-control';
import PropTypes from "prop-types";

const CartProductItem = ({name, quantity, price, onRemove = f => f, onSubtract = f => f, onAdd = f => f }) => (
    <div className="cart-product-item">
        <div className={'cart-product-item__name'}>{name}</div>
        <div className={'cart-product-item__quantity'}>
            <CountControl quantity={quantity} onAdd={onAdd} onSubtract={onSubtract}/>
        </div>
        <div className={'cart-product-item__price'}>
            <SpanMoney value={price}/>
        </div>
        <div className={'cart-product-item__remove'}>
            <button className={'btn btn-danger'} onClick={onRemove}>X</button>
        </div>
    </div>
);

CartProductItem.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    onRemove: PropTypes.func,
    onSubtract: PropTypes.func,
    onAdd: PropTypes.func
};

export default CartProductItem;