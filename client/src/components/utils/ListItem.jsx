import React from 'react'

const ListItem = ({ log }) => {
    const d = new Date(parseInt(log.updatedAt)).toDateString();
    return (
        <>
            <li className="collection-item">
                <div style={{ position: 'relative' }}>
                    <a href="!#" className={`${log.attention ? 'red' : 'blue'}-text`} style={{ fontSize: '1.1rem' }}>{log.message}</a>
                    <br />
                    <span>Last updated by {log.tech.name}</span>
                    <br />
                    <span className="grey-text">At {d}</span>
                    <a style={deleteBtnStyles()} href="#!" className="secondary-content grey-text">
                        <i className="material-icons">delete</i>
                    </a>
                </div>
            </li>
        </>
    )
}

const deleteBtnStyles = () => {
    return {
        position: 'absolute',
        right: 0,
        transform: 'translateY(-50%)',
        top: '50%'
    }
}
export default ListItem
