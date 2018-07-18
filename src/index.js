import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Pubsub from 'pubsub-js';

// Worker
import registerServiceWorker from './registerServiceWorker';

// CSS vendors
import 'reset-css/sass/_reset.scss';
import '@material/layout-grid/dist/mdc.layout-grid.min.css';

// CSS default
import './resource/styles/scss/helpers/fonts.scss';
import './resource/styles/scss/default.scss';

// Common
import Header from './modules/common/Header';
import Footer from './modules/common/Footer';


// Pages
import Home from './modules/pages/Home';

// Structure and routing
class Page extends Component {

  constructor() {
    super();
  }

  pageBehavior( data ) {
    document.body.classList.toggle( 'lock', data.stateMenu );
  }

  componentDidMount() {
    Pubsub.subscribe( 'flip-menu', ( ref, data ) => {
      this.pageBehavior( data );
    } );

    Pubsub.subscribe( 'close-menu', ( ref, data ) => {
      this.pageBehavior( data );
    } );
  }

  render() {
    return (
      <main className="main">
        <Header /> 
        <section>
          <Switch>
            <Route exact path='/' component={ Home }/>
          </Switch>
        </section>
        <Footer />
      </main>
    )
  }
}

ReactDOM.render((
  <BrowserRouter>
    <Page />
  </BrowserRouter>
), document.getElementById('root'));

registerServiceWorker();
