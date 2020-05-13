import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, title, className = '', disabled }) => (
    <button className={className} disabled={disabled} onClick={onClick}>
        {title}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
