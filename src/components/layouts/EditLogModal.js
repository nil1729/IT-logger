import React, {useState, useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';


import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {updateLog, clearCurrent} from '../../actions/logActions';

const EditLogModal = ({current, updateLog, clearCurrent, tech:{techs, loading} }) => {
  
  const [message, setMessage] = useState(' ');
  const [tech, setTech] = useState('');
  const [attention, setAttention] = useState(false);

  useEffect(()=>{
    if(current!==null){
      M.updateTextFields();
      setAttention(current.attention);
      setMessage(current.message);
      setTech(current.tech);
    }
    // eslint-disable-next-line
  },[current]);



  const onSubmit = (e) => {
    e.preventDefault();
    if(message.trim() === '' || tech === ''){
      M.toast({html: 'Please enter a Message and a Technician'});
    }else{
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      }
      setMessage(' ');
      setTech('');
      setAttention(false);
      updateLog(updatedLog);
      clearCurrent();
      M.toast({html: `Log updated by ${updatedLog.tech}`});
    }
  }


  return (
    <div id="edit-log" className="modal">
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field col s12">
            <input 
            type="text"
            name="message"
            value={message}
            onChange={e=>setMessage(e.target.value)}
            />
            <label htmlFor="message">Log Message</label>
          </div>
      </div>
      <div className="row" style={{padding:'0 1em'}}>
      <div className="input-field">
        <select value={tech} onChange={e=>setTech(e.target.value)} name="tech"  className="browser-default">
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
      <div className="row" style={{padding:'0 1em'}}>
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


EditLogModal.propTypes = {
  // current:PropTypes.object.isRequired,
  updateLog:PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  current: state.log.current,
  tech: state.tech
});




export default connect(mapStateToProps, {updateLog, clearCurrent})(EditLogModal);
