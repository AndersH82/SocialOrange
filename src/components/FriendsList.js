import React, { useEffect, useState } from 'react';
import { getFriendsList } from '../services/friendshipService';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await getFriendsList();
        if (Array.isArray(response.data)) {
          setFriends(response.data);
        } else {
          setFriends([]);
        }
      } catch (error) {
        console.error('Error fetching friends:', error);
        setFriends([]);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div>
      {friends.map((friend) => (
        <div key={friend.id}>{friend.name}</div>
      ))}
    </div>
  );
};

export default FriendsList;