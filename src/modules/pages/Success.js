import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Checkbox,
  FormGroup,
  Table,
  Modal,
  OverlayTrigger,
  Button,
  Popover,
  Alert,
  Tooltip,
  ButtonToolbar,
  ButtonGroup,
  Glyphicon,
  CustomComponent
} from 'react-bootstrap';
import axios from 'axios';

// Common

// CSS
import '../../resource/styles/scss/pages/success.scss';

export default class Success extends Component {

  constructor() {
    super();

    var dataList = [];

    this.state = {
      'list': [],
      show: false
     }
  }

  componentDidMount() {

    var options = {
                    method: 'GET',
                    headers: new Headers( {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json'
                    } ),
                    cache: 'default'
                  };

    axios( 'http://35.184.4.30:3000/api/org.cattle.tracker.Contract', options )
      .then( ( response ) => {

        if( response.status == 200 ) {

          this.setState( { 'list': response.data } );

          // console.log(this.state.list);
        }

      } );

  }

  render() {
    return (
      <div id="success">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <Alert bsStyle="success">
                <strong>Parabéns, seu pedido foi concluído!</strong> Confira logo abaixo as informações do seu pedido.
              </Alert>

              <ListGroup componentClass="ul">
                { this.state.list.map( ( item, i ) =>
                  <ListGroupItem key={i}>
                    <p><strong>Origem: </strong>{ item.farm.name }</p>
                    <p><strong>Destino: </strong>{ item.fridge.name }</p>
                    <p><strong>ID GTA: </strong> { item.gtaNumber }</p>
                    <p><strong>Lote:</strong>{ item.batch.batchId }</p>

                    { item.batch.animals.map( ( animal, i ) =>
                      <ListGroupItem key={i}>
                        <p>RFId: { animal.rfid } - Scale: { animal.scale } - Weight: { animal.weight }</p>
                      </ListGroupItem>
                    ) }
                  </ListGroupItem>
                ) }
              </ListGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
