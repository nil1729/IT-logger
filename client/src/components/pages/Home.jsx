import React, { useEffect } from 'react'
import AppLoader from '../utils/Loader';
import FloatButtons from '../utils/FloatButtons';
import LogAdd from '../utils/modals/LogAdd';
import ListItem from '../utils/ListItem';
import Techs from '../utils/modals/TechsModal';
import LogEdit from '../utils/modals/LogEdit';

import { connect } from 'react-redux';
import { getTechs, getLogs } from '../../actions/logs';

const Home = ({ getTechs, getLogs, log }) => {
    useEffect(() => {
        getTechs();
        getLogs();
        // eslint-disable-next-line
    }, []);
    const { logs, loading, filtered } = log;
    return (
        <>
            <div className="container">
                <ul className="collection with-header">
                    <li className="collection-header center"><h4>System Logs</h4></li>
                    {
                        loading ? (<AppLoader />) : (
                            logs.length === 0 ? (<>
                                <p className="flow-text center grey-text">No Logs to Show</p>
                            </>) : (filtered ? (filtered.map(log => (
                                <ListItem key={log._id} log={log} />
                            ))) : (logs.map(log => (
                                <ListItem key={log._id} log={log} />
                            ))))
                        )
                    }
                </ul>
                <FloatButtons />
                <LogAdd />
                <Techs />
                <LogEdit />
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    log: state.logs
})

export default connect(mapStateToProps, { getTechs, getLogs, })(Home);
