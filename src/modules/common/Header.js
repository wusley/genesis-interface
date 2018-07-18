import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg'
import Pubsub from 'pubsub-js';

// Common

// SVGs
import iconLogo from '../../resource/images/svg/logo.svg';
import stateMenu from '../../resource/images/svg/icon-menu.svg';

// CSS
import '../../resource/styles/scss/partials/header.scss';
import '../../resource/styles/scss/partials/menu.scss';

const initialState = {
  stateMenu: false
};

export default class Header extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      stateMenu: false
    };
  }

  flipMenu() {
    this.setState( () => ( {
        stateMenu: !this.state.stateMenu
      } )
    );

    Pubsub.publish( 'flip-menu', { stateMenu: !this.state.stateMenu } );
  }

  closeMenu() {
    this.setState( () => ( {
        stateMenu: false
      } )
    );

    Pubsub.publish( 'close-menu', { stateMenu: false } );
  }

  render() {
    return (
      <header id="header">
        <div className="mdc-layout-grid box-header">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-3-phone">
              <NavLink exact to="/" className="box-logo" onClick={ this.closeMenu.bind( this ) }>
                <ReactSVG path={ iconLogo } svgClassName="icon-logo" />
                
                <h1 className="text-logo">Bovine</h1>
              </NavLink> {/* .box-logo */}
            </div>

            <div className="mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-1-phone">
              <nav id="menu" className={ this.state.stateMenu ? 'activate' : '' }>
                <ReactSVG path={ stateMenu } svgClassName="icon-menu" onClick={ this.flipMenu.bind( this ) } />

                <ul className="list">
                  <li className="item"><NavLink exact to="/" activeClassName="activate" onClick={ this.closeMenu.bind( this ) }>Home</NavLink></li>
                </ul>
              </nav> {/* .box-menu */}
            </div>
          </div>
        </div>
      </header>
    );
  }
}
