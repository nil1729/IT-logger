import React, {useRef} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {searchLogs} from '../../actions/logActions';



const SearchBar = ({searchLogs}) => {
  const text = useRef('')
  return (
    <nav className="blue" style={{marginBottom:'2em'}}>
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input onChange={()=>searchLogs(text.current.value)} ref={text} id="search" type="search" placeholder="Search Logs..."/>
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
  )
}

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
}

export default connect(null, {searchLogs})(SearchBar);
