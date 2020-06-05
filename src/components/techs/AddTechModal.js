import React, {useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addTech} from '../../actions/techActions';


const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if(firstName.trim() === '' || lastName.trim() === ''){
      M.toast({html: 'Please enter First and Last name'});
    }else{
      const newTech = {
        firstName,
        lastName
      }
      addTech(newTech);
      setFirstName('');
      setLastName('');
    }
  }


  return (
    <div id="add-tech" className="modal">
      <div className="modal-content">
        <h4>Add Technician</h4>
        <div className="row">
          <div className="input-field col s12">
            <input 
            type="text"
            name="firstName"
            value={firstName}
            onChange={e=>setFirstName(e.target.value)}
            className="validate"/>
            <label htmlFor="firstName">First Name</label>
          </div>
      </div>

      <div className="row">
          <div className="input-field col s12">
            <input 
            type="text"
            name="lastName"
            value={lastName}
            onChange={e=>setLastName(e.target.value)}
            className="validate"/>
            <label htmlFor="lastName">Last Name</label>
          </div>
      </div>
      
      </div>
      <div className="modal-footer">
        <a onClick={onSubmit} href="#!" className="modal-close blue waves-effect waves-light btn">Enter</a>
      </div>
    </div>
  )
}

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
}

export default connect(null, {addTech})(AddTechModal);