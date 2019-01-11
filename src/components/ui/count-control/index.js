import React from 'react';
import './styles.scss';
import PropTypes from "prop-types";

const CountControl = ({quantity = 0, onSubtract = f => f, onAdd = f => f}) => (
    <div className={'count-control'}>
        <button className="btn btn-outline-primary" onClick={onSubtract}>-</button>
        <span className={'count-control__quantity'}>{quantity}</span>
        <button className="btn btn-outline-primary" onClick={onAdd}>+</button>
    </div>
);

CountControl.propTypes = {
    quantity: PropTypes.number,
    onSubtract: PropTypes.func,
    onAdd: PropTypes.func
};

export default CountControl;