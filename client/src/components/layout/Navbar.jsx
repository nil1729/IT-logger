import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import { filterList } from '../../actions/logs';

const Navbar = ({ loadUser, isAuthenticated, loading, filterList }) => {
    useEffect(() => {
        if (localStorage.token) {
            loadUser();
        }
        // eslint-disable-next-line
    }, []);
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
        filterList(e.target.value);
    }
    return (
        <nav>
            <div className="nav-wrapper blue lighten-1">
                {
                    !isAuthenticated && !loading ? (<span className="brand-logo center">IT Logger</span>) : (<div className="input-field">
                        <input onChange={handleChange} value={text} id="search" type="search" placeholder="Search Logs..." />
                        <label className="label-icon"><i className="material-icons">search</i></label>
                        <i className="material-icons">close</i>
                    </div>)
                }
            </div>
        </nav>
    )
}
const mapStateToProps = state => ({
    isAuthenticated: state.auths.isAuthenticated,
    loading: state.auths.loading
})

export default connect(mapStateToProps, { loadUser, filterList })(Navbar);
