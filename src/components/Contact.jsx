import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import './News.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
      <Image src="assets/Hands typing.jpg" className="header-image2" />
      <Grid>
        <Col xs={12} sm={8} smOffset={2}>
        <p>Contact information:</p>
        <p>gSepulveda9697@gmail.com</p>
        <p>512-909-9827</p>
        <a href="https://www.linkedin.com/in/jorgesepulveda/">LinkedIn</a>
        <p></p>
        </Col>
      </Grid>
      </div>
    )
  }
}
