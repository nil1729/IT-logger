import React from 'react'
import { connect } from 'react-redux';
const Techs = ({ techs }) => {
    return (
        <div id="techsModal" className="modal">
            <div className="modal-content">
                <h4 className="center">Technicians</h4>
                <hr />
                <ul className="collection">
                    {
                        techs && techs.map(tech => (
                            <li key={tech._id} className="collection-item">
                                <div>
                                    <blockquote>{tech.name}</blockquote>
                                    <blockquote>{tech.email}</blockquote>
                                    {/* <span className="secondary-content grey-text">
                                        <i className="material-icons">delete</i>
                                    </span> */}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="modal-footer">
                <button className="modal-close waves-effect waves-green btn-small brown">Close
                    <i className="material-icons right">close</i>
                </button>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    techs: state.logs.techs
})

export default connect(mapStateToProps)(Techs);
