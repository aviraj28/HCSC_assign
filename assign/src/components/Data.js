import React from 'react';

function Data( {name, userName, email} ) {
    return (
        <div>
            <p>
              Name:  {name}
            </p>
            <p>
              User Name:  {userName}
            </p>
            <p>
               Email:  {email}
            </p>
        </div>
    )
}

export default Data;
