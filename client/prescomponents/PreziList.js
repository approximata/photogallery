import React, { PropTypes } from 'react';
import Prezi from './Prezi';
import { Grid, Row } from 'react-bootstrap';


const PreziList = ({ prezises }) => (
  <Grid className="grid">
    <Row>
    {prezises.map(prezi =>
      <Prezi
        key={prezi.id}
        {...prezi}
      />
      )}
    </Row>
  </Grid>
);

PreziList.propTypes = {
  prezises: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default PreziList;
