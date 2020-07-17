import React from 'react'
import { connect } from 'react-redux';
const Techs = ({ techs }) => {
    return (
        <div id="techsModal" class="modal">
            <div class="modal-content">
                <h4 className="center">Technicians</h4>
                <hr />
                <ul class="collection">
                    {
                        techs && techs.map(tech => (
                            <li key={tech._id} className="collection-item">
                                <blockquote>{tech.name}</blockquote>
                                <blockquote>{tech.email}</blockquote>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div class="modal-footer">
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
