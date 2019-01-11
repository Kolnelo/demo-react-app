import React from 'react';
import PropTypes from 'prop-types';
import CountControl from '../count-control';
import SpanMoney from '../span-money';
import './styles.scss';
import {PIZZA_IMAGES_PATH} from '../../../paths';

const ProductItem = ({id = 'c9d9a9cf-4355-4392-b869-1352051c27a8',
                      name,
                      description,
                      price,
                      quantity = 0,
                      onCart = f => f,
                      onAdd = f => f,
                      onSubtract = f => f}) => (
    <div className="product-item">
        <img className="product-item__image"
             src= {PIZZA_IMAGES_PATH + `/${id}.jpg`}
             alt={name}
             title={name}
        />
        <div className="product-item__name">
            {name}
        </div>
        <div className="product-item__description">
            {description}
        </div>
        <div className="product-item__cart">
            <SpanMoney value={price}/>
            <div className={'product-item__control'}>
                {(quantity) ?
                    <CountControl onSubtract={onSubtract} onAdd={onAdd} quantity={quantity}/>
                    :
                    <button className="btn btn-outline-primary" onClick={onCart}>В корзину</button>
                }
            </div>
        </div>
    </div>
);

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
    onCart: PropTypes.func,
    onAdd: PropTypes.func,
    onSubtract: PropTypes.func
};

export default ProductItem;