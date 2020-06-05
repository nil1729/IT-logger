import React, {useEffect} from 'react'
import TechListItem from './TechListItem'

import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({tech:{techs, loading}, getTechs}) => {

    useEffect(()=>{
        getTechs()
        // eslint-disable-next-line
    },[]);
  return (
    <div id="tech-list" className="modal">
        <div className="modal-content">
            <h4>Technician List</h4>
            <ul className="collection">
                {
                    !loading && techs!== null && techs.map(tech=>(
                        <TechListItem
                            key={tech.id}
                            tech={tech}
                        />
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

TechListModal.propTypes = {
    tech: PropTypes.object.isRequired,
    getTechs: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    tech: state.tech
});


export default connect(mapStateToProps, {getTechs})(TechListModal);
