import React from 'react';

const UserOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>My name is {props.username}</p>
            <p>Waddappa!?</p>
        </div>
    );
}

export default UserOutput;