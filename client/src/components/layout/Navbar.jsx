import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';


const Navbar = ({ loadUser }) => {
    useEffect(() => {
        if (localStorage.token) {
            loadUser();
        }
        // eslint-disable-next-line
    }, []);
    return (
        <nav>
            <div className="nav-wrapper blue lighten-1">
                <span className="brand-logo center">IT Logger</span>
            </div>
        </nav>
    )
}

export default connect(null, { loadUser })(Navbar);
