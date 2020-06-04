import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

const LogItem = ({log}) => {
  return (
    <li className="collection-item">
        <div style={{textAlign:'justify'}}>
            <a className={`${log.attention?'red':'blue'}-text modal-trigger`} href="#edit-log">{log.message}</a>
            <br/>
            <span className="grey-text">
                ID <span className="black-text">#{log.id}</span>last updated by{'  '}
                <span className="black-text">{log.tech}</span> on{' '} 
                <Moment format="MMMM DD YYYY, hh:mm:ss A">
                    {log.date}
                </Moment>
            </span>
            <a href="#!" className="grey-text secondary-content"><i className="material-icons">delete</i></a>
        </div>
    </li>
  )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
}

export default LogItem
