import React from 'react';
import PageTemplate from '../page-template';
import {CartOrder} from '../../components/containers';

const Cart = (prop) => (
    <PageTemplate>
        <CartOrder {...prop}/>
    </PageTemplate>
);

export default Cart;