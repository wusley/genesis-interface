import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactSVG from 'react-svg'
import Pubsub from 'pubsub-js';

// Common

// SVGs
import iconUp from '../../resource/images/svg/icon-up.svg';
import iconDown from '../../resource/images/svg/icon-down.svg';
import skin1 from '../../resource/images/svg/skin-field-1.svg';
import skin2 from '../../resource/images/svg/skin-field-2.svg';

// CSS
import '../../resource/styles/scss/partials/form.scss';

export class FieldText extends Component {
  constructor( props ) {
    super( props );

    this.state = { value: ( this.props.preset ? this.props.preset : '' ) };
  }

  setValue( e ) {
    this.setState( { value: e.target.value } );
  }

  render() {
    return (
      <div className="field field-text">
        <label htmlFor={ this.props.id }>{ this.props.label }</label>
        <input type="text" id={ this.props.id } name={ this.props.id } placeholder={ this.props.text } value={ this.state.value } onChange={ this.setValue.bind( this ) } />
      </div>
    );
  }
}

export class FieldTextDuplex extends Component {
  constructor( props ) {
    super( props );

    this.state = { firstTextValue: ( this.props.preset && this.props.preset[0] ? this.props.preset[0] : '' ), secondTextValue: ( this.props.preset && this.props.preset[1] ? this.props.preset[1] : '' ) };
  }

  setFirstTextValue( e ) {
    this.setState( { firstTextValue: e.target.value } );
  }

  setSecondTextValue( e ) {
    this.setState( { secondTextValue: e.target.value } );
  }

  render() {
    return (
      <div className="field field-text field-text-duplex">
        <label htmlFor={ this.props.firstId }>{ this.props.label }</label>

        <div className="box-fields">
          <input type="text" id={ this.props.firstId } name={ this.props.firstId } placeholder={ this.props.firstText } value={ this.state.firstTextValue } onChange={ this.setFirstTextValue.bind( this ) } />
          <input type="text" id={ this.props.secondId } name={ this.props.secondId } placeholder={ this.props.secondText } value={ this.state.secondTextValue } onChange={ this.setSecondTextValue.bind( this ) } />
        </div>
      </div>
    );
  }
}

export class FieldNumber extends Component {
  constructor( props ) {
    super( props );

    this.state = { value: ( this.props.preset ? this.props.preset : '' ) };
  }

  setValue( e ) {
    this.setState( { value: e.target.value } );
  }

  plus( e ) {
    let value = Number( this.state.value ) + Number( this.props.step );

    if( value <= this.props.max || !this.props.max ) {
      this.setState( { value } );
    }
  }

  less( e ) {
    let value = Number( this.state.value ) - Number( this.props.step );

    if( value >= this.props.min || !this.props.min ) {
      this.setState( { value } );
    }
  }

  render() {
    return (
      <div className="field field-number">
        <label htmlFor={ this.props.id }>{ this.props.label }</label>

        <div className="box-wrapper">
          <input type="number" id={ this.props.id } name={ this.props.id } step={ this.props.step } min={ this.props.min } max={ this.props.max } value={ this.state.value } onChange={ this.setValue.bind( this ) } />

          <div className="arrows">
            <div className="trigger up" onClick={ this.plus.bind( this ) }>
              <ReactSVG path={ iconUp } svgClassName="icon icon-up" />
            </div>

            <div className="trigger down" onClick={ this.less.bind( this ) }>
              <ReactSVG path={ iconDown } svgClassName="icon icon-down" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class FieldSelect extends Component {
  constructor( props ) {
    super( props );

    this.state = { value: ( this.props.preset ? this.props.preset : '' ) };
  }

  setValue( e ) {
    this.setState( { value: e.target.value } );
  }

  render() {
    return (
      <div className="field field-select">
        <label htmlFor={ this.props.id }>{ this.props.label }</label>

        <div className="box-wrapper">
          <select id={ this.props.id } name={ this.props.id } value={ this.state.value } onChange={ this.setValue.bind( this ) } >
            { this.props.options.map( ( option ) =>
              <option key={ option.value } value={ option.value }>{ option.label }</option>
            ) }
          </select>

          <div className="arrows">
            <div className="trigger down">
              <ReactSVG path={ iconDown } svgClassName="icon icon-down" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export class FieldCheckbox extends Component {
  constructor( props ) {
    super( props );

    if( this.props.preset ) {
      this.props.list.map( ( checkbox, index ) => {

        this.props.preset.map( ( id ) => {

          if( checkbox.id == id ) {

            this.props.list[ index ].checked = true;

          } else {

            this.props.list[ index ].checked = false;

          }

        } );

      } );
    }

    this.state = { 'list': this.props.list };

  }

  setValue( e ) {

    console.log( e.target.checked );

    this.setState( {

      list: this.state.list.map( ( checkbox, index ) => {

        if( checkbox.id === e.target.id ) {

          checkbox.checked = e.target.checked;

        }

        return checkbox;

      } )

    } );
  }

  render() {
    return (
      <div className="field field-checkbox">
        <label>{ this.props.label }</label>

        <div className="box-fields">
          { this.state.list.map( ( checkbox ) =>

            <div className="box-wrapper" key={ checkbox.id }>
              <input type="checkbox" id={ checkbox.id } name={ checkbox.id } value={ checkbox.value } checked={ checkbox.checked } onChange={ this.setValue.bind( this ) } />

              <label htmlFor={ checkbox.id }>
                <small>{ checkbox.label }</small>
                <ReactSVG path={ skin1 } svgClassName="skin" />
              </label>
            </div>
          ) }
        </div>
      </div>
    );
  }
}
