import React from 'react';
import PropTypes from 'prop-types';

const AppHeader = props => {
    return(
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}

AppHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default AppHeader;