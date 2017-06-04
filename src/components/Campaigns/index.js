import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
import {
  FaAngleRight,
  FaAngleDown,
  FaPencil,
  FaPlusCircle
} from 'react-icons/lib/fa/';

import CreateNewAd from './CreateNewAd';
import './style.css';

const campaigns = [
  {
    name: 'Facebook', // campaign 1
    ads: []
  },

  {
    name: 'Magazine Print', // campaign 2
    ads: [
      {
        name: 'GQ Mag Spring', // ad 1
        scores: [46, 75],
        personas: []
      },
      {
        name: 'Vogue Mag Spring', // ad 2
        scores: [56, 87],
        personas: [
          {
            name: '[[Doug - At Home Writer|||personas/121212]]',
            scores: [
              { score: 42, text: '####% overall' },
              {
                score: 81,
                text: '####% top topic [[Coffeehouse Enlightenment|||boards/123456]]'
              }
            ]
          },
          {
            name: '[[David - Marketing Celebrity|||personas/232323]]',
            scores: [
              { score: 68, text: '####% overall' },
              {
                score: 72,
                text: '####% top topic [[Buyer Personas|||boards/234567]]'
              }
            ]
          },
          {
            name: '[[Ellen - Design Trendsetter|||personas/343434]]',
            scores: [
              { score: 48, text: '####% overall' },
              {
                score: 90,
                text: '####% top topic [[Art Exhibits|||boards/345678]]'
              }
            ]
          },
          {
            name: '[[Steve - Gamer Tech Guy|||personas/454545]]',
            scores: [
              { score: 35, text: '####% overall' },
              {
                score: 52,
                text: '####% top topic [[Video Cards|||boards/456789]]'
              }
            ]
          },
          {
            name: '[[Leslie - Grad at First Job|||personas/676767]]',
            scores: [
              { score: 75, text: '####% overall' },
              {
                score: 85,
                text: '####% top topic [[Small Apartment Living|||boards/567890]]'
              }
            ]
          }
        ]
      },
      {
        name: 'Time Mag Spring', // ad 3
        scores: [62, 83],
        personas: []
      },
      {
        name: 'Wired Mag Spring', // ad 4
        scores: [66, 74],
        personas: []
      },
      {
        name: "Better Homes and Gardens Magazine Spring Ad for Susan's New Deisgns", // ad 5
        scores: [52, 63],
        personas: []
      }
    ]
  },

  {
    name: 'TV primetime spots', // campaign 3
    ads: []
  },

  {
    name: 'TV sports spots', // campaign 4
    ads: []
  },

  {
    name: 'TV movie spots', // campaign 5
    ads: []
  }
];

export default class Campaign extends Component {
  state = {
    adsShow: false,
    personasShow: false,
    open: false
  };

  campaignTitle = cmp => {
    return (
      <div className="campaignTitle">
        <FaAngleRight />
        <span className="cmpTitle">{cmp.name}</span>
        {' '}
        <span className="cmpType">campaign.</span>
        {' '}
        <span className="editCampaign"><FaPencil /></span>
      </div>
    );
  };
  renderAdLists = ads => {
    return ads.map((ad, i) => {
      return (
        <Collapsible
          key={ad.name}
          trigger={this.adsTitle(ad)}
          classParentString="adsCollapse">
          <div className="adContentContainer">List of Ads</div>
        </Collapsible>
      );
    });
  };

  adsTitle = ad => {
    return (
      <div className="adTitle">
        <FaAngleRight />
        <span className="adTitle">{ad.name}</span>
        <span className="adMatches">ad matches</span>
        {' '}
        <span className="editCampaign"><FaPencil /></span>
      </div>
    );
  };

  handleClick = () => this.setState({ adsShow: !this.state.adsShow });

  handlePersonasClick = () =>
    this.setState({ personasShow: !this.state.personasShow, open: true });

  hideModal = () => this.setState({ open: false });

  renderCampaigns = () => {
    return campaigns.map((campaign, i) => {
      return (
        <Collapsible
          key={campaign.name}
          trigger={this.campaignTitle(campaign)}
          classParentString="campaignsCollapse">
          <div className="Ads">
            <span className="cmpTitle">Ads</span>
            <span className="editCampaign">
              <FaPlusCircle onClick={this.handleClick} />
            </span>
          </div>
          <div className="AdsList">
            {this.state.adsShow
              ? <CreateNewAd
                personasClick={this.handlePersonasClick}
                personasShow={this.state.personasShow}
                hideModal={this.hideModal}
                showModal={this.state.open}
                personas={campaign.ads}
                />
            : null}
            {this.renderAdLists(campaign.ads)}
          </div>
        </Collapsible>
      );
    });
  };
  render() {
    return (
      <div style={{ padding: '10px 20px' }}>
        <h3>Campaigns</h3>
        <div className="campaignsContainer">
          {this.renderCampaigns()}
        </div>
      </div>
    );
  }
}
