import React from 'react';
import { receiveFriendRequest } from '../services/friendshipService';

const ReceiveFriendRequest = ({ friendshipId }) => {
 const handleAccept = async () => {
     await receiveFriendRequest(friendshipId);
     // Handle success, e.g., show a message
 };

 return (
     <button onClick={handleAccept}>Accept Friend Request</button>
 );
};

export default ReceiveFriendRequest;