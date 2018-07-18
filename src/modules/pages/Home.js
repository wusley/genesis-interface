import React, { Component } from 'react';
import { Form, FormGroup, ControlLabel, Col, FormControl, Checkbox, Button } from 'react-bootstrap';

// Common

// CSS
import '../../resource/styles/scss/pages/list.scss';

export default class Home extends Component {

  submit() {
    var myHeaders = new Headers();

    var options = {
                    method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default'
                  };

    // fetch( 'flowers.jpg', options )
    //   .then( ( response ) => {
    //
    //     console.log( 'teste' );
    //
    //     // return response.blob();
    //
    //   } )
  }

  render() {
    return (
      <div id="home">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <Form horizontal>
                <FormGroup controlId="formRFId">
                  <Col componentClass={ControlLabel} sm={2}>
                    RFId
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Insira o código de registro do animal" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formBorn">
                  <Col componentClass={ControlLabel} sm={2}>
                    Nascimento
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="dd/mm/yyyy" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formWeight">
                  <Col componentClass={ControlLabel} sm={2}>
                    Peso
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Kg" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formScale">
                  <Col componentClass={ControlLabel} sm={2}>
                    Envergadura
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="cm" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formCNPJ">
                  <Col componentClass={ControlLabel} sm={2}>
                    CNPJ
                  </Col>
                  <Col sm={10}>
                    <FormControl type="text" placeholder="Insira aqui o CNPJ" />
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
