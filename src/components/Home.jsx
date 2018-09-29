import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Panel } from 'react-bootstrap';
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
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
          <Panel>
          <Panel.Body>
            <Image src="assets/profile-pic.jpg" className="about-profile-pic " rounded />
            <h3>Jorge Sepulveda</h3>
            <p>Welcome to Jorge Sepulveda's website using React. I decided to start learning React on my free time and came up with this. It's simple but it works and it will improve over time.</p>
            <p>I intend this website to become a portfolio/resume. I want to create an awesome looking website using React. </p>
            <p>{"Feel free to look around and navigate the site. You can also visit this site on mobile which is another cool thing about React!"}</p>
          </Panel.Body>
          </Panel>
          </Col>
        </Grid>
          {/*<Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/astronomy.jpg" circle className="profile-pic" />
            <h3>Frank</h3>
            <p>Welcome to Jorge Sepulveda's website using React. Over time, this
               website will become a portfolio and resume for me and my future
               coding projects. It's coming so we just gotta give it some time.</p>
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
          </Col>*/}
        </Row>
      </Grid>
    )
  }
}
