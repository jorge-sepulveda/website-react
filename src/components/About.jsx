import React, { Component } from 'react'
import { Grid, Col, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/Career-Fair-pic.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h2>Jorge Sepúlveda</h2>
            <p>The man behind this horrible website.</p>
            <p>I'm your average computer nerd who loves everything about technology. I try my best to keep myself informed with the tech world.</p>
            <p>I like all sorts of tech topics like PC hardware, Cybersecurity, AI, Robotics, etc. </p>
            <p>Technology is one of the driving forces of our world and I would like to pitch in and drive innovation in the tech field</p>
            <h2>Education</h2>
            <p>I am currently a junior attending Texas A&M University. I am majoring in Computing while dual minoring in Cybersecurity and Geographical Information Systems.</p>
            <p> Computing may be a new major out there so I'll give the main idea for it. The Computer Science department wanted to diversify their students by
                allowing them to learn other things while learning about the foundations of Computer Science. The Computing major allows students to take other fields of interest
                so they can combine what they learn with Computer Science to create amazing things.</p>
            <p>Cyber security is a very important topic and it's becomming more of a neccesity in our world. There are more and more companies getting attacked and it is becoming more
               of a priority to protect them. I am minoring in this field to help broaden my perspective and to possibly consider this as a major branch in my career.
            </p>
            <p>Geographical Information Systems is also a very important field. It is used to identify volcanoes, land use, resource management and a number of other things. After taking my
              first geography course I gained an interest in the field. I was trying to see how to combine my Computer Science skills with geography and GIS seemed the way to go.
            </p>
            <p>
            I picked these two minors because I believe I can help people with technology. I would like to apply what I learn to create awesome services or products for people to enjoy.
            </p>
            <br>
            </br>
            <br>
            </br>
            <br>
            </br>
          </Col>
        </Grid>
      </div>
    )
  }
}
