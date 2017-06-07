import React from "react";
import { Row, Column, Button } from "react-foundation";
import { FaAngleDown, FaPlusCircle } from "react-icons/lib/fa/";
import Collapsible from "react-collapsible";

import { Personas } from "./personas";

const adsTitle = () => {
  return (
    <Row className="adTitle expanded">
      <FaAngleDown />
      <Column small={3} className="adTitleInput">
        <input type="text" placeholder="type ad text here" autoFocus />
      </Column>
      <Column small={3}>
        <span className="adMatches">ad matches</span>
      </Column>
    </Row>
  );
};

const CreateNewAd = props => {
  // const renderPersonas = props.personas && props.personas.map((persona, i) => {
  //   return <div key={i}>{persona.personas && persona.personas.map((person, i) => <li key={i}>{JSON.stringify(person)}</li>)}</div>
  // });

  return (
    <Collapsible trigger={adsTitle()} classParentString="adsCollapse" open>
      <Row className="expanded">
        <Column small={12}>
          <h3>Ad</h3>
          <textarea />
        </Column>
        <Button style={{ marginLeft: 20 }}>Edit</Button>
      </Row>
    </Collapsible>
  );
};

export default CreateNewAd;
