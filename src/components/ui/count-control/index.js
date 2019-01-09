import React from 'react';
import './styles.scss';

const CountControl = ({quantity, onSubtract = f => f, onAdd = f => f}) => (
    <div className={'count-control'}>
        <button className="btn btn-outline-primary" onClick={onSubtract}>-</button>
        <span className={'count-control__quantity'}>{quantity}</span>
        <button className="btn btn-outline-primary" onClick={onAdd}>+</button>
    </div>
);

export default CountControl;