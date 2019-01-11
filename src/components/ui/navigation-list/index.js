import React from 'react';
import NavigationItem from '../navigation-item';
import './styles.scss';
import PropTypes from "prop-types";

const NavigationList = ({navigations = []}) => (
    <ul className={'navigation-list'}>
        {navigations.map((nav, i) =>
            <li key={i}>
                <NavigationItem {...nav}/>
            </li>
        )}
    </ul>
);

NavigationList.propTypes = {
    navigations: PropTypes.array
};

export default NavigationList;