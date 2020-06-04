import React, {useState, useEffect} from 'react'
import axios from 'axios';

import PreLoader from '../layouts/PreLoader'
import LogItem from './LogItem';
const Logs = () => {

    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get('/logs');
            setLogs(res.data);
            setLoading(false);
        }
        fetchData();
        // eslint-disable-next-line
    },[]);
  return (
    <div className="container center">
        <ul className="collection with-header">
            <li className="collection-header"><h3 className="center">System Logs</h3></li>
            {
                loading?<PreLoader/>:!loading && logs.length === 0 ? <p className="center">No Logs to show</p>:
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

export default Logs
