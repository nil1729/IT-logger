import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addLog} from '../../actions/logActions';


const AddLogModal = ({ addLog, tech:{techs, loading} }) => {
  const [message, setMessage] = useState('');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if(message.trim() === '' || tech === ''){
      M.toast({html: 'Please enter a Message and a Technician'});
    }else{
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }
      setMessage('');
      setTech('');
      setAttention(false);
      addLog(newLog);
      M.toast({html: `Log added by ${newLog.tech}`});
    }
  }


  return (
    <div id="add-log" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input  
            type="text"
            name="message"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            />
            <label htmlFor="message">Log Message</label>
          </div>
      </div>
      <div className="row">
      <div className="input-field">
        <select value={tech} onChange={e=>setTech(e.target.value)} name="tech" className="browser-default">
          <option value="" disabled>
            Choose Technician
          </option>
          {
            !loading && techs !== null && techs.map(tech => (
              <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>{`${tech.firstName} ${tech.lastName}`}</option>
            ))
          }
        </select>
      </div>
      </div>
      <div className="row">
        <div className="input-field">
        <p>
        <label>
          <input
            className="filled-in" 
            value={attention}
            onChange={e=>setAttention(!attention)}
            checked={attention}
            type="checkbox"
            />
          <span>Needs Attention</span>
          </label>
          </p>
        </div>
      </div>
      </div>
      <div className="modal-footer">
        <a onClick={onSubmit} href="#!" className="modal-close blue waves-effect waves-light btn">Enter</a>
      </div>
    </div>
  )
}


AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
}
const mapStateToProps = state => ({
  tech: state.tech
});


export default connect(mapStateToProps, { addLog })(AddLogModal)
