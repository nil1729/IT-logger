import React from 'react'
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logs';
import M from 'materialize-css/dist/js/materialize.js';

const ListItem = ({ log, deleteLog, setCurrent }) => {
    const d = new Date(parseInt(log.updatedAt)).toDateString();
    const deleteHandle = async e => {
        e.preventDefault();
        await deleteLog(log._id);
        M.toast({ html: 'Log Deleted Successfully' });
    }
    return (
        <>
            <li className="collection-item">
                <div style={{ position: 'relative' }}>
                    <a href="#editLogModal" onClick={() => { setCurrent(log._id) }} className={`${log.attention ? 'red' : 'blue'}-text modal-trigger`} style={{ fontSize: '1.1rem' }}>{log.message}</a>
                    <br />
                    <span>Last updated by {log.tech.name}</span>
                    <br />
                    <span className="grey-text">At {d}</span>
                    <span onClick={deleteHandle} className="secondary-content grey-text">
                        <i className="material-icons">delete</i>
                    </span>
                </div>
            </li>
        </>
    )
}


export default connect(null, { deleteLog, setCurrent })(ListItem)
