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
            <p>I'm your average computer nerd who loves everything about technology. I hope to make an impact in tech wherever I can.</p>
            <p>I like all sorts of tech topics like PC hardware, Cybersecurity, AI, Robotics, etc. </p>
            <p>Technology is one of the driving forces of our world and I would like to pitch in and drive innovation in the tech field</p>
            <h2>Education</h2>
            <p>I am currently a senior attending Texas A&M University. I am majoring in Computing while specializing in Geographical
                Information Systems.</p>
            <p> Computing is a new major at A&M. The Computer Science department wanted to diversify their students by
                allowing them to learn other things while learning the foundations of Computer Science. The Computing major allows students to take other fields of interest
                so they can combine what they learn with Computer Science to create amazing things.</p>
            <p>
              I have found an interest in GIS and decided to put my focus in that area. I hope to combine the two fields one day to make an awesome project one day. 
            </p>
            <h2>Work Experience</h2>
            <h3>American Express</h3>
            <p>
              I interned at American Express over the summer and worked on several websites within my team. 
            </p>
            <h3>Texas A&M College of Architecture</h3>
            <p>
              I started working with the college of Architecture in February 2019. I continue to do regular IT tasks but at a larger scale. 
              Using technologies like PDQ, powershell, chocolatey and more, we are able to be more efficient in supporting users throughout the entire
              department. 
            </p>
            <h3>Texas A&M Agricultural Economics</h3>
            <p>
              Performance of help desk duties such as troubleshooting software and hardware, cloning computers, replace malfunctioning hardware on computers and other duties
              such as helping with A/V setups for the department. Communicating with a team and with staff in order to ensure
              technology is operating throughout the building.
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
