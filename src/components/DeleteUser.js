import React, { useState } from 'react';
import { deleteUser } from '../services/friendshipService';

const DeleteUser = () => {
 const [userId, setUserId] = useState('');

 const handleDelete = async () => {
    await deleteUser(userId);
    // Handle success, e.g., show a message
 };

 return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete User</button>
    </div>
 );
};

export default DeleteUser;