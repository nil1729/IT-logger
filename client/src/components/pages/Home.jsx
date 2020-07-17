import React, { useEffect } from 'react'
import AppLoader from '../utils/Loader';
import FloatButtons from '../utils/FloatButtons';
import LogAdd from '../utils/modals/LogAdd';
import ListItem from '../utils/ListItem';

import { connect } from 'react-redux';
import { getTechs, getLogs } from '../../actions/logs';

const Home = ({ getTechs, getLogs, log }) => {
    useEffect(() => {
        getTechs();
        getLogs();
        // eslint-disable-next-line
    }, []);
    const { logs, loading } = log;
    return (
        <>
            <div className="container">
                <ul className="collection with-header">
                    <li className="collection-header center"><h4>System Logs</h4></li>
                    {
                        loading ? (<AppLoader />) : (
                            logs.map(log => (
                                <ListItem key={log._id} log={log} />
                            ))
                        )
                    }
                </ul>
                <FloatButtons />
                <LogAdd />
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    log: state.logs
})

export default connect(mapStateToProps, { getTechs, getLogs })(Home);
