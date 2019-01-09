import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';

const NavigationItem = ({to ='/', name}) => (
    <Link className={'navigation-item'} to={to}>{name}</Link>
);

export default NavigationItem;