import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import AuthContext from './context/auth-context';

import Wht_ico from '../../assets/imgs/wht_ico.png';
import navBrand from '../../assets/imgs/navBrand.png';
import location1 from '../../assets/imgs/location_1.jpg';
import location2 from '../../assets/imgs/location_2.jpg';
import location3 from '../../assets/imgs/location_3.png';
import location4 from '../../assets/imgs/location_4.jpg';
import location5 from '../../assets/imgs/location_5.jpg';
import location6 from '../../assets/imgs/location_6.jpg';
import kwayera from '../../assets/imgs/kwayera.jpg';
import ade from '../../assets/imgs/team_2_ade.jpg';
import khadijah from '../../assets/imgs/team_3_khadijah.jpg';
import kwasausya from '../../assets/imgs/team_4_kwasausya.jpg';
import perdella from '../../assets/imgs/team_5_perdella.jpg';
import "./overlay.css"

const Overlay = (props) => {
  let location = useLocation().pathname.substr(1);
  // console.log(props.data);

  return (
    <div className="overlayTopdiv">

      {props.data.type === 'info' && (

        <Col className="overlayCol">
        <Row className="overlayTopRow">
        <Button variant="outline-light" size="sm" className="overlayClose" onClick={props.closeOverlay}>X</Button>
        </Row>
        <Row className="overlayRow">

        {props.data.data === 'kwayera' && (
          <React.Fragment>
          <h2 className="overlayHeading">
           Kwayera Archer
          </h2>
          <p className="overlayText">
           Transformational Leadership coach
          </p>

          <p className="overlayText">
            Kwayera’s cultural curiosity  was piqued in her earlier years with combinations of frequent international travels with her parents, as well as being raised in both Jamaica, and New York City in the USA.  She developed a respect and deep passion for understanding and working in partnership with communities to reach to their desired outcomes.
          </p>
          <p className="overlayText">
          Kwayera was a real- life, professional ballet dancer, who is now the proud mother of three beautiful adult children and also holds many field related certificates and honors. She is is an alumna of Columbia Business School’s Executive-Level Graduate Training program with the Institute for Nonprofit Management and holds Masters degrees in  Community Economic Development with a focus in Community Organizing and Nonprofit Management.
          </p>
          <p className="overlayText">
          Her proven track record in designing and delivering initiatives, that are sustainable and inclusive of the community’s voice, has become the basis for some of her most requested consultancies, through her International consulting firm Global Ase. Kwayera’s work also received the attention of the Obama’s in 2014 when she received an award at the White House for designing and running one of the best arts and humanities programs in the nation-- the NYC based Ifetayo Cultural Arts Academy, Inc.
          </p>
          <p className="overlayText">
          Kwayera is a community strategist and travels throughout the Caribbean, Africa and the Americas sharing insights on philanthropy, social responsibility, cultural intelligence, organizational transformation, mindful leadership, and community engagement.
          </p>
          <p className="overlayText">
          She is  a visiting professor at multiple Universities and sits on various corporate boards  and cultural arts panels  globally. She advises philanthropic entities, social venture firms, and non-profit organizations and their leaders on best practices for creating, transforming, leading and sustaining their organizations.
          </p>


          <a href="https://global-ase.com/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="lg" className="overlayAction">More</Button>
          </a>
          <a href="https://ifetayo.org/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="lg" className="overlayAction">Even More</Button>
          </a>

          </React.Fragment>
        )}


        {props.data.data === 'ade' && (
          <React.Fragment>
          <h2 className="overlayHeading">
           Ade Collman
          </h2>

          <p className="overlayText">
          (LAC. & LMT)
          </p>
          <p className="overlayText">
          Ade started his journey in the direction of therapeutic massage while working at an herb shop in the west village of New York City.  Although, at a young age Ade discovered his love for healing and wellness from his grandmother.
          </p>
          <p className="overlayText">
          He Is a graduate of the Swedish Institute Health and Science College in NYC. A seasoned Acupuncturist and Massage Therapist, Ade specializes in muscular pain and skeletal disease and is known for helping to remove powerful emotional blocks through body therapy. His goal is to assist others in their wellness pursuits.
          </p>
          <p className="overlayText">
          He recognizes that people manifest ailments and pain due to blockage both physically and emotionally which can ultimately imprison a person's body. But through touch therapy, Ade assists his clients in reconnecting with their bodies and beginning a healing process.
          </p>

          <a href="https://www.lifewellnesscenter.life/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="lg" className="overlayAction">More</Button>
          </a>
          </React.Fragment>
        )}

        {props.data.data === 'khadijah' && (
          <React.Fragment>
          <h2 className="overlayHeading">
          Khadija A. Tudor
          </h2>

          <p className="overlayText">
          (LMT)
          </p>
          <p className="overlayText">
          Khadija practices Therapeutic massage through an approach that focuses on relaxation as a tool for easing pain. Khadija noticed that her female clients shared similar concerns: body issues, safety concerns, stress and anxiety, and more. No matter their career or relative wealth, each client had various & unique needs.
          </p>
          <p className="overlayText">
          Acknowledging these needs, Khadija and Ade designed Life Wellness Center to offer their clients a safe place to relax, build on and revive.
          </p>
          <p className="overlayText">
          Khadija's belief is that an empowered life is one that can be lived with the familiarity of touch. This belief guides her practice. She brings an intuitive caring demeanor into every session, a place of trust and calm.
          </p>
          <p className="overlayText">
          She is a graduate of the Swedish Institute Health and Science College in NYC. Her professional experience ranges from spas to medical offices and a growing clientele of people recovering from injuries, and chronic physical and emotional pain.
          </p>
          <p className="overlayText">

          </p>
          <p className="overlayText">

          </p>

          <a href="https://www.lifewellnesscenter.life/" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="lg" className="overlayAction">More</Button>
          </a>
          </React.Fragment>
        )}
        {props.data.data === 'kwasausya' && (
          <React.Fragment>
          <h2 className="overlayHeading">
          Kwasausya Khepera
          </h2>

          <p className="overlayText">
          Fitness and Nutrition Coach
          </p>
          <p className="overlayText">
          Kwasa was introduced to tasty living foods in 1994 while working at a well known holistic health center in Brooklyn, NY. However she only found classes that had a lot of bland food with no flavor and "no sauce".  Kwasa’s inner city journey led her to African dance classes held by Forces of Nature Dance Company, where she met her godparents Smst Dele and Smsu Abdel Salaam and the Temple of the Living Book.
          </p>
          <p className="overlayText">
          Her godparents were and still are the most vibrant examples of adult health in the Solar 131 community she had ever experienced. She observed and followed their example closely.
          </p>
          <p className="overlayText">
          Kwasa grew up with a family of southern and Caribbean background, eating a lot of well seasoned dishes with loads of flavor! She also, unfortunately, witnessed the long term effects of all the "soul" food eating in the overwhelming occurrences of all the lifestyle dis-eases within her family and extended community.  The stress of those around her who were chasing the carrot of the "American" dream also manifested in depression as a result of “junk food” intake.
          Fresh out of high school and starting to earn her own living, she was drawn to health as a direct result of her family’s relationship to food and subsequently became vegetarian.
          Her transition to Living Foods came after her homebirth and making food from scratch for her young child and years of traveling with her healthy snacks in her bag as a flight attendant.
          </p>
          <p className="overlayText">
          Kwasa found herself underwhelmed with the practical food programmes being offered by colleges at the time. She credits her 30 years plus health and culinary journey for giving her a higher level of comprehension of 100% raw and living foods consumption and its effects on new generations of children and relationships.
          </p>
          <p className="overlayText">
          When this exclusive NYC fitness trainer is not consulting with her clients or winning competitions, she can be found working on her " Sistah Buttahfly and Sistah Monkey"  YouTube puppet series about better eating habits for children and adults.
          </p>
          <p className="overlayText">
          Kwasa is spotted around New York with her fresh fruits and vegetables from the food co-op and farmer's market on her bicycle. She consumes 100% whole living foods (no dehydrators) and serves it to her family and community. She also shares this important message with the global community.
          </p>


          <a href="" target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="lg" className="overlayAction">More</Button>
          </a>
          </React.Fragment>
        )}
        {props.data.data === 'perdella' && (
          <React.Fragment>
          <h2 className="overlayHeading">
          Perdella Jn. Baptiste
          </h2>

          <p className="overlayText">
          The Young I (Ifetayo Representative)
          </p>


          <p className="overlayText">
          Perdella believes that having a strong foundation is essential when aspiring to achieve your best. Being born into a family in the island of Saint Lucia who believe in rearing a child with strong work and moral ethics has resulted in her becoming a well-rounded individual. This foundation kept her grounded in ways that allowed her the freedom to explore the true essence of life.
          </p>
          <p className="overlayText">
          This student of life is pursuing a Liberal Arts Degree with a minor in early childhood intervention from Medgar Evers College in Brooklyn New York. Perdella has joined the Soulful Joy Family since March 2020 as the first to hold the position as an Ifetayo Alumni representative for the next generation.
          </p>
          <p className="overlayText">
          Perdella sums up her outlook on this life experience: “...As important as it may seem to know what I want to become in life, it is equally essential to know where I am coming from...Dance is my life. Social change is what I live for. Purpose keeps me motivated. Love keeps me alive, but above all, the breath of my ancestors living inside me gives me the strength to endure.”
          </p>

          </React.Fragment>
        )}

        </Row>
        </Col>

      )}

      {props.data.type === 'image' && (

        <React.Fragment>
        <Row className="overlayImageTopRow">
        <Button variant="outline-light" size="md" className="overlayClose" onClick={props.closeOverlay}>X</Button>
        </Row>

        <Row className="overlayImageRow">

        {props.data.data === 'kwayera' && (
          <Image src={kwayera} className="overlayImage" />
        )}
        {props.data.data === 'ade' && (
          <Image src={ade} className="overlayImage" />
        )}
        {props.data.data === 'khadijah' && (
          <Image src={khadijah} className="overlayImage" />
        )}
        {props.data.data === 'kwasausya' && (
          <Image src={kwasausya} className="overlayImage" />
        )}
        {props.data.data === 'perdella' && (
          <Image src={perdella} className="overlayImage" />
        )}
        {props.data.data === 'location1' && (
          <Image src={location1} className="overlayImage" />
        )}
        {props.data.data === 'location2' && (
          <Image src={location2} className="overlayImage" />
        )}
        {props.data.data === 'location3' && (
          <Image src={location3} className="overlayImage" />
        )}
        {props.data.data === 'location4' && (
          <Image src={location4} className="overlayImage" />
        )}
        {props.data.data === 'location5' && (
          <Image src={location5} className="overlayImage" />
        )}
        {props.data.data === 'location6' && (
          <Image src={location6} className="overlayImage" />
        )}
        </Row>

        </React.Fragment>

      )}


    </div>
  )
}

export default Overlay;
