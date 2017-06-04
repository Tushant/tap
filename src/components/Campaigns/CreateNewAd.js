import React from 'react';
import { Row, Column, Button } from 'react-foundation';
import { FaAngleDown, FaPlusCircle } from 'react-icons/lib/fa/';
import Collapsible from 'react-collapsible';

import { Personas } from './personas';

const adsTitle = () => {
  return (
    <div className="adTitle">
      <FaAngleDown />
      <span className="adTitle">
        <Column small={3}>
          <input type="text" />
        </Column>
      </span>
      <span className="adMatches">ad matches</span>
    </div>
  );
};

const CreateNewAd = (props) => {
  // const renderPersonas = props.personas && props.personas.map((persona, i) => {
  //   return <div key={i}>{persona.personas && persona.personas.map((person, i) => <li key={i}>{JSON.stringify(person)}</li>)}</div>
  // });

  return (
    <Collapsible trigger={adsTitle()} classParentString="adsCollapse" open>
      <Row>
        <Column small={12}><textarea /></Column>
        <Button>Edit</Button>
      </Row>
      <p>
        Personas
        {' '}
        <span><FaPlusCircle onClick={props.personasClick} /></span>
        {props.personasShow ? <Personas showModal={props.showModal} hideModal={props.hideModal} personas={props.personas} /> : null}
      </p>
    </Collapsible>
  );
};

export default CreateNewAd;
