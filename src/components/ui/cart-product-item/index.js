import React from 'react';
import './styles.scss';
import SpanMoney from '../span-money';

const CartProductItem = ({name = 'No name', quantity, price, onRemove = f => f, onSubtract = f => f, onAdd = f => f }) => (
    <div className="cart-product-item">
        <div className={'cart-product-item__name'}>{name}</div>
        <div className={'cart-product-item__quantity'}>
            <button className="btn btn-outline-primary" onClick={onSubtract}>-</button>
            <span className={'quantity-value'}>{quantity}</span>
            <button className="btn btn-outline-primary" onClick={onAdd}>+</button>
        </div>
        <div className={'cart-product-item__price'}>
            <SpanMoney value={price}/>
        </div>
        <div className={'cart-product-item__remove'}>
            <button className={'btn btn-danger'} onClick={onRemove}>X</button>
        </div>
    </div>
);

export default CartProductItem;