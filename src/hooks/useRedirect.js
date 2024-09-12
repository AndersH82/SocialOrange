import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  useEffect(() => {
    const handleMount = async () => {
      try {
        // Retrieve the refresh token from localStorage
        const refreshToken = localStorage.getItem("refreshToken");

        // Make the request to refresh the token
        const response = await axios.post("/dj-rest-auth/token/refresh/", {
          refresh: refreshToken,
        });

        // Handle the response and update tokens
        if (response.status === 200) {
          const { access, refresh } = response.data;
          localStorage.setItem("authToken", access);
          localStorage.setItem("refreshToken", refresh);

          if (userAuthStatus === "loggedIn") {
            history.push("/");
          }
        }
      } catch (err) {
        // Handle errors
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
      }
    };

    handleMount();
  }, [history, userAuthStatus]);
};