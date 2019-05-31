import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions/username';

const UserName = ({ setUsername }) => {
    return (
        <div>
            <h3>Username</h3>
            <input onChange={setUsername} />
        </div>
);
}

const mapDispatchToProps = dispatch => {
    return {
        setUsername: event => dispatch(setUsername(event.target.value))
    };
}
export default connect(null, mapDispatchToProps)(UserName);
