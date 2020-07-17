import React from 'react'

const FloatButton = () => {
    return (
        <>
            <div className="fixed-action-btn">
                <a href="#addLogModal" className="btn-floating btn-large red waves-effect waves-light modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
                <ul>
                    <li><a className="btn-floating indigo"><i className="material-icons">person_add</i></a></li>
                    <li><a className="btn-floating light-green darken-1"><i className="material-icons">person</i></a></li>
                </ul>
            </div>
        </>
    )
}

export default FloatButton
