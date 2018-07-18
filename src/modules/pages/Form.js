import React, { Component } from 'react';

// Common
import { FieldText, FieldTextDuplex, FieldNumber, FieldSelect, FieldCheckbox } from '../components/Form';

// CSS

export default class Forming extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      selectOptionsList : [
        { 'value': '', 'label': 'Fill' },
        { 'value': 1, 'label': 'Option 1' },
        { 'value': 2, 'label': 'Option 2' },
        { 'value': 3, 'label': 'Option 3' }
      ],
      checkboxList : [
        { 'id': 'checkbox-1', 'value': 'Value 1', 'label': 'Label 1' },
        { 'id': 'checkbox-2', 'value': 'Value 2', 'label': 'Label 2' }
      ]
    }
  }

  render() {
    var style = {
      maxWidth: 1024,
      margin: '0 auto'
    };

    return (
      <section style={ style }>
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <FieldText id="input-text-id" label="Simple Text field" preset="" text="fill" />
            </div>

            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <FieldTextDuplex firstId="input-text-first-id" secondId="input-text-second-id" label="Duplex Text field" preset={ [ 'preset 1', '' ] } firstText="fill first" secondText="fill second" />
            </div>

            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <FieldNumber id="input-number-id" label="Simple Number field" preset="2" step="1" min="0" max="5" />
            </div>

            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <FieldSelect id="input-select-id" label="Simple Select field" preset="2" options={ this.state.selectOptionsList } />
            </div>

            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <FieldCheckbox label="Simple checkbox field" preset={ [ 'checkbox-1' ] } list={ this.state.checkboxList } />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
