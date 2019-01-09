import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';


const CartActions = ({onOrder}) => (
    <div className={'cart-actions'}>
        <Link to={'/'} className={'btn btn-secondary cart-actions__back'}>Вернуться в меню</Link>
        <button className={'btn btn-primary cart-actions__order'} onClick={onOrder}>Заказать</button>
    </div>
);

export default CartActions;