import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import styles from "../../styles/ProfileList.module.css";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "./PopularProfiles";

const ProfileList = () => {
  const [profiles, setProfiles] = useState({ results: [] });
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const { data } = await axiosReq.get("/profiles/");
        setProfiles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProfiles = profiles.results.filter((profile) =>
    profile.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Form className={styles.SearchBar} onSubmit={(event) => event.preventDefault()}>
        <i className={`fas fa-search ${styles.SearchIcon}`} />
            <Form.Control
              type="text"
              placeholder="Search profiles"
              value={searchQuery}
              onChange={handleSearch}
              className="mr-sm-2"
            />
          </Form>
        <Container className={appStyles.Content}>
          {loading ? (
            <Asset spinner />
          ) : (
            <>
              <InfiniteScroll
                children={filteredProfiles.map((profile) => (
                  <div key={profile.id} className="my-3 d-flex align-items-center">
                    <div>
                      <Link className="align-self-center" to={`/profiles/${profile.id}`}>
                        <Image src={profile.image} roundedCircle height={55} />
                      </Link>
                    </div>
                    <div className={`mx-2 ${styles.WordBreak}`}>
                      <strong>{profile.owner}</strong>
                    </div>
                  </div>
                ))}
                dataLength={filteredProfiles.length}
                loader={<Asset spinner />}
                hasMore={!!profiles.next}
                next={() => fetchMoreData(profiles, setProfiles)}
              />
            </>
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
};

export default ProfileList;