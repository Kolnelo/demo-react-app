import React from 'react';
import NavigationItem from '../navigation-item';
import './styles.scss';

const NavigationList = ({navigations = []}) => (
    <ul className={'navigation-list'}>
        {navigations.map((nav, i) =>
            <li key={i}>
                <NavigationItem {...nav}/>
            </li>
        )}
    </ul>
);

export default NavigationList;