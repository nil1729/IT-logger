import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import PreLoader from '../layouts/PreLoader'
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';


const Logs = ({log:{logs, loading}, getLogs}) => {

    useEffect(()=>{
        getLogs();
        // eslint-disable-next-line
    },[]);


  return (
    <div className="container center">
        <ul className="collection with-header">
            <li className="collection-header"><h3 className="center">System Logs</h3></li>
            {
                loading || logs === null?<PreLoader/>:!loading && logs.length === 0 ? <p className="center">No Logs to show</p>:
                logs.map(log=>(
                    <LogItem
                        key={log.id}
                        log={log}
                    />
                ))
            }
        </ul>
    </div>
  )
}

Logs.propTypes={
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
});



export default connect(mapStateToProps, {getLogs})(Logs);
