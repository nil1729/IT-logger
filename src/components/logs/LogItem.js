import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';




const LogItem = ({log, deleteLog, setCurrent}) => {
  return (
    <li className="collection-item">
        <div style={{textAlign:'justify'}}>
            <a onClick={(e)=>{e.preventDefault();setCurrent(log);}} className={`${log.attention?'red':'blue'}-text modal-trigger`} href="#edit-log">{log.message}</a>
            <br/>
            <span className="grey-text">
                ID <span className="black-text">#{log.id}</span>last updated by{'  '}
                <span className="black-text">{log.tech}</span> on{' '} 
                <Moment format="MMMM DD YYYY, hh:mm:ss A">
                    {log.date}
                </Moment>
            </span>
            <a href="#!" onClick={(e) => {e.preventDefault();deleteLog(log.id);M.toast({html:'Log Deleted'})}} className="grey-text secondary-content"><i className="material-icons">delete</i></a>
        </div>
    </li>
  )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}


export default connect(null, {deleteLog, setCurrent})(LogItem)
