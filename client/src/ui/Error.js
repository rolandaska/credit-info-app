import React from 'react';
import PropTypes from 'prop-types';

import './error.scss';

const Error = ({ message }) => !message ? null : (<p className="error-component">{message}</p>)

Error.propTypes = {
    message: PropTypes.string.isRequired,
}

export default Error;