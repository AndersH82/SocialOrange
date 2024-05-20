import { axiosReq } from "../api/axiosDefaults";

export const getFriendsList = () => {
  return axiosReq.get('/friendships/');
};

export const sendFriendRequest = (userId) => {
  return axiosReq.post('/friendships/', { user: userId });
};

export const receiveFriendRequest = (friendshipId) => {
  return axiosReq.put(`/friendship/${friendshipId}/`);
};

export const deleteUser = (userId) => {
  return axiosReq.delete(`/user/${userId}/`);
};