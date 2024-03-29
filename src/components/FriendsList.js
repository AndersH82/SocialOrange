import React, { useEffect, useState } from 'react';
import { getFriendsList } from '../services/friendshipService';

const FriendsList = () => {
 const [friends, setFriends] = useState([]);

 useEffect(() => {
    const fetchFriends = async () => {
      const response = await getFriendsList();
      setFriends(response.data);
    };

    fetchFriends();
 }, []);

 return (
    <div>
      <h2>Friends List</h2>
      <ul>
        {friends.map(friend => (
          <li key={friend.id}>{friend.user.username}</li>
        ))}
      </ul>
    </div>
 );
};

export default FriendsList;