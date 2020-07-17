import React, { useState, useRef, useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.js';
import { connect } from 'react-redux';
import AppLoader from '../Loader';
import { createLog, clearCurrent, updateLog } from '../../../actions/logs';

const LogAdd = ({ techs, createLog, current, clearCurrent, updateLog }) => {
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
        if (current) {
            nameEl.current.value = current.message;
            techEl.current.value = current.tech._id;
            setAttention(current.attention);
            M.AutoInit();
            const instance = M.Modal.getInstance(modalEl.current);
            instance.open();
        } else {
            resetForm();
            M.AutoInit();
        }
        // eslint-disable-next-line
    }, [techs, current]);
    const handleSubmit = async e => {
        e.preventDefault();
        setSubmitted(true);
        const message = nameEl.current.value;
        const tech = techEl.current.value;
        if (!validateInput(message, tech)) {
            return;
        }
        resetForm();
        if (current) {
            await updateLog({ message, tech, attention }, current._id);
            M.toast({ html: 'Log Updated Successfully' });
        } else {
            await createLog({ message, tech, attention });
            M.toast({ html: 'Log Added Successfully' });
        }
        setSubmitted(false);
        const instance = M.Modal.getInstance(modalEl.current);
        instance.close();
    }
    return (
        <>
            <div ref={modalEl} id="addLogModal" className="modal">
                <form onSubmit={handleSubmit}>
                    <div className="modal-content" style={{ paddingBottom: 0 }}>
                        <h4 className="center green-text">{current ? 'Edit Log' : 'Add New Log'} </h4>
                        <hr />
                        <div className="row" style={{ marginBottom: 0 }}>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
                                <input required ref={nameEl} type="text" className="validate" />
                                <label className={`${current ? 'active' : ''}`} htmlFor="icon_prefix">Log Title</label>
                            </div>
                            <div className="input-field col s12">
                                <i className="material-icons prefix">account_circle</i>
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
                    <button onClick={() => { clearCurrent() }} className="modal-close waves-effect waves-green btn-small brown">Close
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

export default connect(mapStateToProps, { createLog, clearCurrent, updateLog })(LogAdd);
