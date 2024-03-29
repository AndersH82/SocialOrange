import React, { useState } from 'react';
import { sendFriendRequest } from '../services/friendshipService';

const SendFriendRequest = () => {
 const [userId, setUserId] = useState('');

 const handleSubmit = async (e) => {
    e.preventDefault();
    await sendFriendRequest(userId);
    // Handle success, e.g., show a message
 };

 return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button type="submit">Send Friend Request</button>
    </form>
 );
};

export default SendFriendRequest;