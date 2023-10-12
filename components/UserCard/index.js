import React from 'react';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <img src={user.avatar_url} alt={user.login} />
            <h3>{user.login}</h3>
        </div>
    );
}

export default UserCard;
