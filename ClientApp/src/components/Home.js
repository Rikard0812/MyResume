import React, { Component } from 'react';
import MyPicture from '../images/Me.jpg'
import Yrgo from '../images/yrgo.jpg'
import PS from '../images/PS_Logo.png'
import HandelsImg from '../images/Handelsakademin.png'
import Hiber from '../images/Hiber.png'
import Arvato from '../images/Arvato.png'
import vivab from '../images/vivab.png'
import EducationCard from './EducationCard';
import { SocialIcon } from 'react-social-icons';
import './Home.css'

export class Home extends Component {
  static displayName = Home.name;

  constructor() {
    super();
    this.state = {
      numberOfRepos: 0
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/rikard0812/repos')
      .then(response => response.json())
      .then(json => {
        this.setState({
          numberOfRepos: json.length
        })
      });
  }

  render () {
    return (
      <div className="bottomPadding">
        <img src={MyPicture} alt="this is me" className="imageOfMe" />
        <div className ="textAlign">
            <h1>Welcome!</h1>
            <h3>Rikard Andersson </h3>
          <h5>Student, Software Developer</h5>
          <h6>I currently have {this.state.numberOfRepos} Github repos!</h6>
          <SocialIcon url="https://github.com/Rikard0812" className="socialIconPadding" />
        </div>

        <div className="circle1">
        </div>
        <div className="circle2">
        </div>
        <div className="circle3">
        </div>

        <h3 className="textToTopMargin">Education</h3>

        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top EducationCard_image_PS" src={PS} alt="School bild" />
            <EducationCard Name="Peder Skrivares School, Varberg" Duration="2011 - 2014" Info="Technical Program with focus on Design and Product development"></EducationCard>
          </div>
          <div className="col-md-4">
            <img className="card-img-top EducationCard_image" src={Yrgo} alt="School bild" />
            <EducationCard Name="YRGO, Gothenburg" Duration="2017 - 2019" Info="Game Programmer, with a focus on Unity"></EducationCard>
          </div>
          <div className="col-md-4">
            <img className="card-img-top EducationCard_image" src={HandelsImg} alt="School bild" />
            <EducationCard Name="Handelsakademin, Gothenburg" Duration="2020-2022" Info="Software Developer"></EducationCard>
          </div>
        </div>

        <h3 className="textToEducationMargin">Work Experience</h3>

        <div className="row">
          <div className="col-md-4">
            <img className="card-img-top EducationCard_image_PS" src={Hiber} alt="Work bild" />
            <EducationCard Name="Hiber AB - Game Designer/Content Producer" Duration="December 2018 - April 2020" Info="Worked with level design where I made custom games. I also spent some time making content for the company's social media."></EducationCard>
          </div>
          <div className="col-md-4">
            <img className="card-img-top arvato_image" src={Arvato} alt="Work bild" />
            <EducationCard Name="Arvato Finance, Varberg - Customer Support" Duration="June 2016 - December 2016" Info="Started as a summer job which turned into continued employment during the fall."></EducationCard>
          </div>
          <div className="col-md-4">
            <img className="card-img-top vivab_image" src={vivab} alt="Work bild" />
            <EducationCard Name="VIVAB Water & Envoirment, Varberg - Recycling caretaker" Duration="June 2015 - August 2015" Info="This was a summer job where I worked at the recycling station."></EducationCard>
          </div>
        </div>
          
      </div>
    );
  }
}
