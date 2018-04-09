import React from "react";
import PropTypes from 'prop-types';
//renders a error text
const InlineError = ({text}) => (
    <span style={{color: "#ae5856"}}>
        {text}
    </span>
);
InlineError.propTypes = {
    text: PropTypes.string.isRequired
};

export default InlineError;