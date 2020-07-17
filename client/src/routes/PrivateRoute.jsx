import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, auths, ...rest }) => {
    const { isAuthenticated, loading } = auths;
    return (
        <Route {...rest} render={props => (
            !isAuthenticated && !loading ?
                <Redirect to="/" />
                : <Component {...props} />
        )} />
    )
}

const mapStateToProps = state => ({
    auths: state.auths
});

export default connect(mapStateToProps)(PrivateRoute);
