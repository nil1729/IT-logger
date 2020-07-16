import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <div className="container center">
                <h1>Page Not Found</h1>
                <p className="flow-text">The page you are looking for does not exist</p>
                <Link to="/" className="btn green waves-effect waves-light" type="button">Go Back
                    <i className="material-icons left">arrow_back</i>
                </Link>
            </div>
        </>
    )
}

export default NotFound
