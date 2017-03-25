import React, { PropTypes } from 'react';
import { Col, Button, Thumbnail } from 'react-bootstrap';

const Prezi = ({ title, thumbnail, creator, createdAt }) => (
  <Col xs={8} sm={5} md={4}>
    <Thumbnail src={thumbnail} alt="thmb">
      <h4>{title}</h4>
      <p>creator: {creator.name}</p>
      <small>created: {createdAt} </small>
      <a href={creator.profileUrl}>
        <Button bsStyle="info" bsSize="xsmall">user profile</Button>
      </a>
    </Thumbnail>
  </Col>
);

Prezi.propTypes = {
  title: PropTypes.string.isRequired,
  creator: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Prezi;
