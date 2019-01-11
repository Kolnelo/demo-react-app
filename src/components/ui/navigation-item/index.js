import React from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import PropTypes from "prop-types";

const NavigationItem = ({to, name}) => (
    <Link className={'navigation-item'} to={to}>{name}</Link>
);

NavigationItem.propTypes = {
    to: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default NavigationItem;