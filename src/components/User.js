// import React, { useState } from 'react';
import React, { useReducer } from 'react';
import { firstUser } from '../data/users';

const User =()=> {
    // const [user, setUser] = useState(firstUser);

    // rewriting using useReducer
    const [user, setUser] = useReducer(
        (user, newDetails) => ({...user, ...newDetails}),
        firstUser
    );

    return (
        <div>
            <h1>
                {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
            </h1>
            <p>Email: {user.email}</p>
            <p>
                Location: {user.city}, {user.state}
            </p>
            <button
                onClick={()=> {
                    setUser({ ...user, admin: true});
                }}
            >
                Make Admin
            </button>
        </div>
    )
}

export default User;