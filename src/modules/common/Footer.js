import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Common

// SVGs

// CSS
import '../../resource/styles/scss/partials/footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="quick-text">
          <div className="mdc-layout-grid container-text">
            <div className="mdc-layout-grid__inner">
              <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
                <p>TDC 2018 ♥ Hackaton Blockchain</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
