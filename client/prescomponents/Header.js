import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

const Header = () => (
  <Jumbotron>
    <h1>The Prezi Finder</h1>
    <p>This is a simple react redux prezi searcher with webpack server and an api backend server.</p>
    <a href="https://github.com/prezi/assignment-create-bodormate"><Button bsStyle="primary">check in git</Button></a>
  </Jumbotron>
);

export default Header;
