import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

// Common

// CSS
import '../../resource/styles/scss/pages/home.scss';

export default class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Field 1
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Field 1" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Field 2
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Field 2" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit">Send</Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
