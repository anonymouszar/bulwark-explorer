
import Component from '../core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';

/**
 * Will use material icons to render.
 * @param {Object} props The props with the name.
 */
class Footer extends Component {
  // static propTypes = {
  //   coins: PropTypes.array.isRequired,
  //   txs: PropTypes.array.isRequired,
  // };

  render() {
    return (
      <div className="footer container">
        <div className="footer__block">
          <img className="footer__logo" src="/img/vestxlogo.png" />
        </div>
        <div className="footer__block">
          <div className="footer__data-wrapper">
            <div className="footer__data-block">
              <a href="/">Overview</a>
              
            </div>
            <div className="footer__data-block">
              <a href="/#/movement">Movement</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/masternode">Masternode</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/peer">Connections</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/statistics">Statistics</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/api">API</a>
            </div>
            <div className="footer__data-block">
              <a href="/#/coin">VESTX Info</a>
            </div>
          </div>
        </div>
        <div className="footer__block">
          <div className="menu-desktop__social ml-auto">
            <a href="https://github.com/vestx" target="_blank">
              <Icon name="github" className="fab footer__social-media-icon" />
            </a>
            <a href="https://t.me/vestxcoin" target="_blank">
              <Icon name="telegram" className="fab footer__social-media-icon" />
            </a>
            <a href="https://discord.gg/HxX8Aqs" target="_blank">
              <Icon name="discord" className="fab footer__social-media-icon" />
            </a>
            <a href="https://twitter.com/vestxcoin" target="_blank">
              <Icon name="twitter" className="fab footer__social-media-icon" />
            </a>
          </div>
        </div>
      </div>
    );
  };
};

export default Footer;
