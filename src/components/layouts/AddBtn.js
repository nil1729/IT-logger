import React from 'react'

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
        <a href="#add-log" className="modal-trigger btn-floating btn-large waves-effect waves-light blue darken-3"><i className="large material-icons">add</i></a>
        <ul>
            <li>
                <a href="#tech-list" className="btn-floating waves-effect waves-light green">
                    <i className="material-icons">person</i>
                </a>
            </li>
            <li>
                <a href="#add-tech" className="btn-floating waves-effect waves-light red">
                    <i className="material-icons">person_add</i>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default AddBtn
