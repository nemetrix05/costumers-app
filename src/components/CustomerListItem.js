import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CustomerListItem = ({name, editAction, delAction, urlPath, dni }) => {
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Link to={`${urlPath}${dni}`}>{name}</Link>
                        </td>
                        <td>
                            <Link to={`${urlPath}${dni}/edit`}>{editAction}</Link>
                        </td>
                        <td>
                            <Link to={`${urlPath}${dni}/del`}>{delAction}</Link>
                        </td>                                        
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

CustomerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPath: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired
}

export default CustomerListItem;