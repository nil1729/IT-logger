import React from 'react'
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const FloatButton = ({ logout }) => {
    return (
        <>
            <div className="fixed-action-btn">
                <a href="#addLogModal" className="btn-floating btn-large red waves-effect waves-light modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
                <ul>
                    <li><a href="!#" onClick={(e) => { e.preventDefault(); logout() }} className="btn-floating indigo waves-effect waves-light"><i className="material-icons">fingerprint</i></a></li>
                    <li><a href="#techsModal" className="btn-floating light-green darken-1 waves-effect waves-light modal-trigger"><i className="material-icons">person</i></a></li>
                </ul>
            </div>
        </>
    )
}

export default connect(null, { logout })(FloatButton);
