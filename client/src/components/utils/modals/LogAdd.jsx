import React, { useState, useRef, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.js';
import { connect } from 'react-redux';
import { createLog } from '../../../actions/logs';

const LogAdd = ({ techs, createLog }) => {
    const nameEl = useRef();
    const techEl = useRef();
    const modalEl = useRef();
    const [attention, setAttention] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const validateInput = (message, tech,) => {
        if (message.trim().length === 0) {
            M.toast({ html: 'Please enter a Log Message' });
        } else if (tech === '') {
            M.toast({ html: 'Please Select a Technician' });
        } else {
            return true;
        }
    }
    const resetForm = () => {
        nameEl.current.value = '';
        techEl.current.value = '';
        setAttention(false);
    }
    useEffect(() => {
        M.AutoInit();
        // eslint-disable-next-line
    }, [techs]);
    const handleSubmit = async e => {
        e.preventDefault();
        const message = nameEl.current.value;
        const tech = techEl.current.value;
        if (!validateInput(message, tech)) {
            return;
        }
        setSubmitted(true);
        resetForm();
        await createLog({ message, tech, attention });
        M.toast({ html: 'Log Added Successfully' });
        M.AutoInit();
        setSubmitted(false);
        const instance = M.Modal.getInstance(modalEl.current);
        instance.close();
    }
    return (
        <>
            <div ref={modalEl} id="addLogModal" className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="modal-content" style={{ paddingBottom: 0 }}>
                        <h4 className="center green-text">Add New Log</h4>
                        <hr />
                        <div className="row" style={{ marginBottom: 0 }}>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">message</i>
                                <input required ref={nameEl} type="text" className="validate" />
                                <label htmlFor="icon_prefix">Log Title</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">person_pin</i>
                                <select ref={techEl} defaultValue="">
                                    <option value="" disabled>Choose your option</option>
                                    {
                                        techs && techs.map(tech => (
                                            <option key={tech._id} value={tech._id}>{tech.name}</option>
                                        ))
                                    }
                                </select>
                                <label>Select Technician</label>
                            </div>
                            <div className="input-field col s12">
                                <p>
                                    <label>
                                        <input className="filled-in" type="checkbox" onChange={() => { setAttention(!attention) }} checked={attention ? 'checked' : ''} />
                                        <span>Need Attention</span>
                                    </label>
                                </p>
                            </div>
                            <div className="input-field col s12">
                                <button className="btn cyan waves-effect waves-light" type="submit">
                                    {submitted ? (<>Loding.... </>) : (<>Submit<i className="material-icons right">send</i></>)}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="modal-footer">
                    <button className="modal-close waves-effect waves-green btn-small brown">Close
                    <i className="material-icons right">close</i>
                    </button>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    techs: state.logs.techs,
    current: state.logs.current
})

export default connect(mapStateToProps, { createLog })(LogAdd);
