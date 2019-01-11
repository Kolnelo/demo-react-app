import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const SpanMoney = ({value = 0}) => (
    <span className="money">
        <span className="money__value">{value}</span><span className="money__currency">&nbsp;Руб</span>
    </span>
);

SpanMoney.propTypes = {
    value: PropTypes.number
};

export default SpanMoney;