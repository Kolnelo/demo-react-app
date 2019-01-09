import React from 'react';
import PropTypes from 'prop-types';
import CountControl from '../count-control';
import SpanMoney from '../span-money';
import './styles.scss';
import {PIZZA_IMAGES_PATH} from '../../../paths';

const ProductItem = ({id = 'c9d9a9cf-4355-4392-b869-1352051c27a8',
                      name = 'No name',
                      description = 'No description',
                      price = 0,
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
            {(quantity) ?
                <CountControl onSubtract={onSubtract} onAdd={onAdd} quantity={quantity}/>
                :
                <div className={'buttons-cart'}>
                    <button className="btn btn-outline-primary" onClick={onCart}>В корзину</button>
                </div>

            }

        </div>
    </div>
);

ProductItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
};

export default ProductItem;