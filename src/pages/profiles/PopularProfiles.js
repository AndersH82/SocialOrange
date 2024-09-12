import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
  const { popularProfiles = {} } = useProfileData();

  if (!popularProfiles || !popularProfiles.results) {
    return (
      <Container className={appStyles.Content}>
        <Asset spinner />
      </Container>
    );
  }

  const filteredResults = popularProfiles.results.filter(profile => profile.id);

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      <p>Most followed profiles.</p>
      {mobile ? (
        <div className="d-flex justify-content-around">
          {filteredResults.slice(0, 4).map((profile) => (
            <Profile key={profile.id} profile={profile} mobile />
          ))}
        </div>
      ) : (
        filteredResults.map((profile) => (
          <Profile key={profile.id} profile={profile} />
        ))
      )}
    </Container>
  );
};

export default PopularProfiles;
