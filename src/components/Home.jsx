import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2> {"Welcome to Jorge's website"}</h2>
          <p>{"Jorge's website built using React"}</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
          <Link to="/news">
            <Button bsStyle="primary">News</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/astronomy.jpg" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/adult-beard-boy.jpg" circle className="profile-pic"/>
            <h3>Vanessa</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/clouds.jpg" circle className="profile-pic"/>
            <h3>Riff</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
