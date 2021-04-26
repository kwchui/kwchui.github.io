import React from 'react';
import ReactDOM from 'react-dom';
import M from 'materialize-css';
import './App.css';
import './materialize-social.css';
import logo from './images/logo.jpg';
import portrait from './images/portrait.jpg';

import photo1 from './images/carousel/yosemite.jpg';
import photo2 from './images/carousel/bryce.jpg';
import photo3 from './images/carousel/girabaldi.jpg';
import photo4 from './images/carousel/IMG_6038.jpg';
import photo5 from './images/carousel/kanaskis.jpg';
import photo6 from './images/carousel/larchValley.jpg';
import photo7 from './images/carousel/potatochip.jpg';
import photo8 from './images/carousel/pointlobos.jpg';
import photo9 from './images/carousel/yellowknife.jpg';

import photoA from './images/carousel/bunnychow.jpg';
import photoB from './images/carousel/churro.jpg';
import photoC from './images/carousel/fish.jpg';
import photoD from './images/carousel/mochi.jpg';
import photoE from './images/carousel/shavedIce.jpg';
import photoF from './images/carousel/teatime.jpg';
import photoG from './images/carousel/poutineOeb.jpg';
import photoH from './images/carousel/somisomi.jpg';

const hikingCarouselImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9];
const foodCarouselImages = [photoA, photoB, photoC, photoD, photoE, photoF, photoG, photoH];

function NavBar(props) {
  return(
    <div>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="#home">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#interests">Interests</a></li>
      </ul>
      <div className="navbar-fixed">
        <nav>
            <div className="nav-wrapper">           
              <a href="#" className="left logoIconWrapper">
                <img src={logo} alt="" className="logoIcon"></img>
              </a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="menuButtons right hide-on-med-and-down">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#interests">Interests</a></li>
                </ul>
            </div>
          </nav>
        </div>
      </div>
  );
}

function ExperienceSkillsContent(props) {
  return(
    <div>
      <p className="experienceDescription">
        After graduating UCLA with a BS in Computer Science, I am now a full time software engineer in the Bay Area.
        My experience is mainly in frontend development along with some backend infrastucture work, but I am continuously looking to expand my CS knowledge through reading and side projects.
      </p>
      <div className="skillsSection">
        <p className="sectionTitle"> Skills </p>
        <p className="skillsList">  C++ · HTML · CSS · Python · Javascript · React · Java</p>
      </div>
    </div>
  );
}

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: this.props.label,
      photos: this.props.photos,
    };
  }

  addImages(){
    var imageArray = [];
    for (let p in this.props.photos) {
      imageArray.push(<CarouselImage image={this.props.photos[p]}/>);
    }
    return imageArray;
  }

  render() {
    const imageCollection = this.addImages();
    return(
      <div className={this.props.label}>
        {imageCollection}
      </div>
    );
  }
}

function CarouselImage(props) {
  return(
    <a className="carousel-item">
      <img src={props.image}/>
    </a>
  );
}

function App() {
  return (
<div className="App">
        <NavBar/>
        <div id="home" className="homeSection valign-wrapper">
          <div className="titleText animation">
            Hi! I'm Kristen.
          </div>
          <a href="#experience">
            <i className="material-icons scroll-down">keyboard_arrow_down</i>
          </a>
        </div>
        <div id="experience" className="experienceSection valign-wrapper row flexbox">
          <div className="hide-on-large-only">
            <p className="sectionTitle"> About Me </p>
            <div className="flexbox">
              <img src={portrait} alt="" className="portrait-mobile"></img>
            </div>
            <ExperienceSkillsContent/>
          </div>
          <div className="hide-on-med-and-down flexbox">
            <div className="col l4">
              <img src={portrait} alt="" className="responsive-img portrait"></img>
            </div>
            <div className="col l6">
              <p className="sectionTitle"> About Me </p>
              <ExperienceSkillsContent/>
            </div>
          </div>
        </div>
        <div id="interests" className="interestsSection valign-wrapper">
          <div className="row">
            <p className="sectionTitle">My Interests</p>
            <p className="interestsDescription">
              Outside of work, I like playing sports and hiking to balance out my food adventures.
              Here are some pics captured from my adventures over the years!
            </p>
            <Carousel label="carousel" photos={hikingCarouselImages}/>
            <Carousel label="carousel carouselFood" photos={foodCarouselImages}/>
          </div>
        </div>
        <footer className="page-footer">
              <div className="footer-copyright">
                <div className="container">
                  Last Updated: Apr 2021
                  <a className="waves-effect waves-light grey-text text-lighten-4 right" href="https://www.linkedin.com/in/kristen-chui-a5137077" target="_blank">
                  <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </footer>
      </div>
  );
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge: "right"});
  });

document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(carousel, {height: 600});
  });

export default App;