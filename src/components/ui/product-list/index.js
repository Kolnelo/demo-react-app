import React from 'react';
import ProductItem from '../product-item';
import PropTypes from 'prop-types';
import './styles.scss';

const ProductList = ({products = [], cartProducts = [], onCartProduct = f => f, onAddProduct = f => f, onSubtractProduct = f => f}) => {
    if(cartProducts === null) { cartProducts = [] }
    //получаем количество продуктов в корзине (по умолчанию 0)
    const getQuantityByCartProduct = (p = {quantity: 0}) => p.quantity;

    const combinedProducts = products.map(p => ({
            ...p,
        quantity: getQuantityByCartProduct(cartProducts.find( cp => cp.id === p.id ))
        })
    )

    return (
        <div className={'product-list'}>
            {combinedProducts.map(({id, name, description, price, quantity}) =>
                <ProductItem key={id}
                             id={id}
                             name={name}
                             description={description}
                             price={price}
                             quantity={quantity}
                             onCart={() => onCartProduct(id)}
                             onAdd={() => onAddProduct(id)}
                             onSubtract={() => onSubtractProduct(id)}
                />
            )}
        </div>
    );
}

ProductList.propTypes = {
    products: PropTypes.array,
    onAddProduct: PropTypes.func,
    onSubtractProduct: PropTypes.func
};

export default ProductList;