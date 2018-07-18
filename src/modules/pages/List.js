import React, { Component } from 'react';
import  { Redirect } from 'react-router-dom';
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
  Tooltip,
  ButtonToolbar,
  ButtonGroup,
  Glyphicon
} from 'react-bootstrap';
import axios from 'axios';

// Common

// CSS
import '../../resource/styles/scss/pages/list.scss';

export default class List extends Component {

  constructor() {
    super();

  var dataList = [];

    this.state = {
      'list': [],
      show: false
     }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

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

    axios( 'http://35.184.4.30:3000/api/org.cattle.tracker.Animal', options )
      .then( ( response ) => {

        if( response.status == 200 ) {

          let data = response.data;

          response.data.map( ( item, index ) => {

            data[ index ].checked = false;

          } );

          console.log( data );

          this.setState( { 'list': data } );
        // return response.data;

        }

      } );

  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow( e ) {

    console.log( e.currentTarget );

    this.setState({ show: true });
  }

  createLote( e ) {

    let lote = []

    this.state.list.map( ( item, index ) => {

      if( item.checked ) {

        lote.push( 'resource:org.cattle.tracker.Animal#' + item.rfid );

      }

    } );

    var data =  {
      "$class": "org.cattle.tracker.CreateContract",
      "farm": "resource:org.cattle.tracker.Company#0001",
      "fridge": "resource:org.cattle.tracker.Company#0002",
      "animals": lote
    };

    console.log( data );

    axios.post( 'http://35.184.4.30:3000/api/org.cattle.tracker.CreateContract', data )
      .then( ( response ) => {

        if( response.status == 200  ) {

          this.props.history.push( '/sucesso' );

        }

      } );

  }

  setValue( e ) {

    this.setState( {

      list: this.state.list.map( ( item, index ) => {

        if( item.rfid == e.target.id ) {

          item.checked = e.target.checked;

        }

        return item;

      } )

    } );
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div id="list">
        <div className="mdc-layout-grid">
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell--span-12-desktop mdc-layout-grid__cell--span-8-tablet mdc-layout-grid__cell--span-4-phone">
              <Table responsive striped bordered condensed hover>
                <thead>
                  <tr>
                    <th>RFId</th>
                    <th>Weight</th>
                    <th>Scale</th>
                    <th>Status</th>
                    <th>Info</th>
                    <th>Add</th>
                  </tr>
                </thead>

                <tbody>
                  { this.state.list.map( ( item, i ) =>
                    <tr key={ i }>
                      <td>{ item.rfid }</td>
                      <td>{ item.weight }</td>
                      <td>{ item.scale }</td>
                      <td>{ item.status }</td>
                      <td refLote={ item.rfid } onClick={ this.handleShow }>
                        <Glyphicon glyph="search" />
                      </td>
                      <td>
                        <Checkbox inline id={ item.rfid } name={ item.rfid } checked={ item.checked } onChange={ this.setValue.bind( this ) }></Checkbox>
                      </td>
                    </tr>
                  ) }
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="6" align="center">
                      <ButtonToolbar>
                        <Button bsStyle="primary" onClick={ this.createLote.bind( this ) }>
                          Finalizar pedido
                        </Button>
                      </ButtonToolbar>
                    </td>
                  </tr>
                </tfoot>
              </Table>

              <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Dados do lote #01</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <p>
                </p>

                </Modal.Body>

                <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
                </Modal>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
