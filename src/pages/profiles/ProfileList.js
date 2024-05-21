import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ProfileList.module.css";
import { Container, Row, Col, Image, Spinner } from "react-bootstrap";

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        setProfiles(data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <Container>
      <Row>
        <h1 className={styles.ProfilesHeader}>Profiles</h1>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          profiles.map((profile) => (
            <Col key={profile.id} md={4} className={styles.Profile}>
              <Link to={`/profiles/${profile.id}`}>
                <Image src={profile.image} roundedCircle />
                <h3>{profile.owner}</h3>
              </Link>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProfileList;