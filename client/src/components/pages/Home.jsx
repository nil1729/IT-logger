import React, { useEffect } from 'react'
import AppLoader from '../utils/Loader';
import FloatButtons from '../utils/FloatButtons';
import LogAdd from '../utils/modals/LogAdd';
import ListItem from '../utils/ListItem';
import Techs from '../utils/modals/TechsModal';

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
                            logs.length === 0 ? (<>
                                <p className="flow-text center grey-text">No Logs to Show</p>
                            </>) : (logs.map(log => (
                                <ListItem key={log._id} log={log} />
                            )))
                        )
                    }
                </ul>
                <FloatButtons />
                <LogAdd />
                <Techs />
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    log: state.logs
})

export default connect(mapStateToProps, { getTechs, getLogs, })(Home);
