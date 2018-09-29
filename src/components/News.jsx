import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/ai-codes-coding.jpg" className="header-image2" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>Asides from the nerdy persona, I like other activities. I love nature so you can count me in for a hiking trip.</p>
              <p>I have also been playing videogames since the Nintendo 64. Videogames are in a special place in my heart.</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/pi.jpg" />
              <p> I also like tinkering with electronics from time to time. Here is a pic of my raspberry pi. Right now it's being used as a retro game emulator. I might make a server with it sometime in the future.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
