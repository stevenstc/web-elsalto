import React, { Component } from "react";

import Utils from "../../utils";
import contractAddress from "../Contract";
import cons from "../../cons.js";

export default class Historial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      historial: []

    }

    this.verHistorial = this.verHistorial.bind(this);
    this.consultarUsuario = this.consultarUsuario.bind(this);

  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    await this.verHistorial();
    setInterval(() => this.verHistorial(),30*1000);
  };

  async consultarUsuario(direccionTRX){

    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'consultar/'+direccionTRX;
    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)})
    const json = await response.json();

    //console.log(json);
    return json;

  };

  async verHistorial(){

    var historial = [];

    this.setState({
      historial: historial
    });

    var direccion =  await window.tronWeb.trx.getAccount();
    direccion = window.tronWeb.address.fromHex(direccion.address);

    var usuario =  await this.consultarUsuario(direccion);

    if ( usuario.active ) {

      if ( usuario.record.length > 0) {

        var o = 0
        if (usuario.record.length > 10) {
          o = usuario.record.length-10;
        }
        for (var i = o; i < usuario.record.length; i++) {

          var ver = usuario.record[i];
          ver.date = new Date(ver.date);

          if(ver.done){
            ver.done = "Completado"
          }else{
            ver.done = "Procesando"
          }

          let evento = (

              <div className="col-full" key={ver._id}>
                  <span style={{fontSize: '18px'}} title={ver.date}> {ver.amount} GPX-S | Retiro en {ver.method} | {ver.done} </span>
               
              </div>

          );
          historial.splice(0,0,evento);

        }

      }
    }

    this.setState({
      historial: historial
    });

  };

  render() {

    const divStyle = {
      width: '100%',
      height:'115px',
      overflow: 'scroll'
    };

    return (

      <div>
        <h3>Transactions <button type="button" className="btn btn-light" onClick={() => this.verHistorial()}>Reload</button></h3>

        <div style={divStyle} >

          {this.state.historial}

        </div>
      </div>

    );
  }
}
