import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { deleteTech } from '../../actions/techActions';


const TechListItem = ({tech, deleteTech}) => {
  return (
    <li className="collection-item">
        <div>{tech.firstName}{'  '}{tech.lastName}{'  '}
            <a href="#!" onClick={(e)=>{e.preventDefault(); deleteTech(tech.id);}} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </div>
    </li>
  )
}

TechListItem.propTypes = {
    tech: PropTypes.object.isRequired,
}

export default connect(null, {deleteTech})(TechListItem);
