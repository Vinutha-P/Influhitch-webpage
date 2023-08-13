import React from "react";
import headerimage from "../../assets/header.png";
import playstore from "../../assets/downloadgoogle.png";
import applestore from "../../assets/downloadapple.png";
import powerup from "../../assets/powerup.png";
import elevateStratergy from "../../assets/elevate.png";
import time_money from "../../assets/time-money.png";
import protect_reputation from "../../assets/protect-reputation.png"
import simpleSteps from "../../assets/simple-steps.png"
import wicked from "../../assets/wicked.png"
import althomes from '../../assets/althomes.png'
import jobsforher from '../../assets/jobdforher.png'

import "./main.css";

const Main = () => {
  return (
    <div className="container main_container">
      <div className="first_container">
        <div className="image-container">
          <div className="text-container">
            <h1>Redefining the Influencer Marketing ecosystem</h1>
            <p>
              At InfluHitch, our aim is to empower brands and influencers with a
              seamless platform that facilitates authentic partnerships, boosts
              brand reach and engagement, and maximizes ROI for both parties
              with our connected ecosystem powered by technology and AI
            </p>
            <div className="text2">
              <h2>Download and Register NOW!!</h2>
            </div>
            <div className="imagedownload">
              <img
                src={applestore}
                alt="applestore"
                className="applestore-image"
              />
              <img
                src={playstore}
                alt="playstore"
                className="playstore-image"
              />
            </div>
          </div>
          <img src={headerimage} alt="header" className="background-image" />
        </div>
      </div>

      <div className="powerup_influence">
        <div>
          <img src={powerup} alt="powerup" className="powerup-image" />
        </div>
        <div className="text3">
          <h1>Power Up Your Influence!</h1>
          <p>
            We provide a platform that enables seamless collaboration between
            brands and influencers for end-to-end management of campaigns, from
            ideation to execution, thus creating a win-win situation for both
            parties.
          </p>
        </div>
      </div>

      <div className="elevate_statergy">
        <div className="text4">
          <h1>Elevate Your Strategy and Grow 10X </h1>
          <p>
            We offer personalised consultation services to brands and
            influencers to help them build and execute effective influencer
            marketing strategies. Our team provides guidance on content
            creation, community building, and campaign optimization to ensure
            the desired outcomes are achieved.
          </p>
        </div>
        <div>
          <img
            src={elevateStratergy}
            alt="elevateStratergy"
            className="elevateStratergy-image"
          />
        </div>
      </div>

      <div className="powerup_influence">
        <div>
          <img src={time_money} alt="time_money" className="powerup-image" />
        </div>
        <div className="text3">
          <h1>Time is Money</h1>
          <p>
            Time is Money Our intelligent virtual assistant provides time and
            resource management recommendations, saving you effort and helping
            you deliver quality content on time.
          </p>
        </div>
      </div>

      <div className="elevate_statergy">
      <div className="text4">
          <h1>Protect Your Reputation </h1>
          <p>
          Our platform is backed by powerful AI that vets out fraudulent and non-authentic influencers, thus ensuring genuineness of the influencers on the platform. This results in accurate ROI calculations for brands and enables them to invest in influencers that provide the maximum returns.
          </p>
        </div>
        <div>
          <img
            src={protect_reputation}
            alt="protect_reputation"
            className="elevateStratergy-image"
          />
        </div>
      </div>

      <div className="powerup_influence">
        <div>
          <img src={simpleSteps} alt="simpleSteps" className="powerup-image" />
        </div>
        <div className="text3">
          <h1>Simple Steps</h1>
          <p>
          Focused On Results 
          </p>
        </div>
      </div>


      <div className="our_brands">
      <h1>Our Brands</h1>
      </div>
      <div className="our_brandsimages">
      <div className="singlebrand"><img src={wicked} alt="wicked" className="brand-image" /></div>
      <div className="singlebrand"><img src={althomes} alt="simpleSteps" className="brand-image" /></div>
      <div className="singlebrand"><img src={jobsforher} alt="simpleSteps" className="brand-image" /></div>
      </div>
    </div>
  );
};

export default Main;
