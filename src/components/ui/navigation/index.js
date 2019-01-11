import React from 'react';
import NavigationList from '../navigation-list';
//import CartPanel from '../cart-panel';
import {NavigationCart} from '../../containers';
import './styles.scss';
import PropTypes from "prop-types";

const Navigation = ({navigations = []}) => (
    <nav className={'navigation'}>
        <NavigationList navigations={navigations}/>
        <div className={'navigation__cart-panel'}>
            <NavigationCart />
        </div>
    </nav>
);

Navigation.propTypes = {
    navigations: PropTypes.array
};


export default Navigation;