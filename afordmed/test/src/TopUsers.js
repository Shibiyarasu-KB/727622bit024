import React, { useState, useEffect } from 'react';

function TopUsers() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error('Error fetching top users:', err));
    }, []);

    return (
        <div>
            <h1 className="mb-4">Top Users</h1>
            <div className="row">
                {users.map((user) => (
                    <div key={user.userId} className="col-12 col-md-6 mb-3">
                        <div className="card">
                            <div className="card-body d-flex align-items-center">
                                <img
                                    src={`https://picsum.photos/50?random=${user.userId}`}
                                    alt={user.name}
                                    className="rounded-circle me-3"
                                />
                                <div>
                                    <h5 className="card-title mb-0">{user.name}</h5>
                                    <p className="card-text">Total Comments: {user.totalComments || 0}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopUsers;