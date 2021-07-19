import React, { Component } from "react";
import Utils from "../../utils";
import contractAddress from "../Contract";

import cons from "../../cons.js";


const delay = ms => new Promise(res => setTimeout(res, ms));


export default class Oficina extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rango: "N/A",
      ganancia: 0,
      refe: [[],[],[],[],[],[],[],[],[],[]],
      direccion: "",
      link: "Make an investment to get the referral LINK",
      registered: false,
      balanceTrx: "0",
      withdrawnTrx: "0",
      investedWozx: "0",
      withdrawnWozx: "0",
      miPrecioWozx: 0,
      priceUSDWOZX: 0,
      depositos: []

    };

    this.Investors = this.Investors.bind(this);
    this.enviarWozx = this.enviarWozx.bind(this);
    this.Link = this.Link.bind(this);
    this.Wozx = this.Wozx.bind(this);
    this.Wozx2 = this.Wozx2.bind(this);
    this.rateW = this.rateW.bind(this);

    this.consultarTransaccion = this.consultarTransaccion.bind(this);
    this.enfGpx = this.enfGpx.bind(this);
    this.unfGpx = this.unfGpx.bind(this);

  }

  async componentDidMount() {

    await Utils.setContract(window.tronWeb, contractAddress);
    this.rateW();
    await this.Link();
    await this.Investors();
    setInterval(() => this.Investors(),1*1000);
  };

  async consultarTransaccion(id){

    this.setState({
      texto: "Updating balance..."
    });
    await delay(3000);
    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'consultar/transaccion/'+id;

    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)});
    const json = await response.json();

    return json.result;

  };


  async rateW(){
    var proxyUrl = cons.proxy;
    var apiUrl = 'https://data-asg.goldprice.org/dbXRates/USD';
    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)})
    const json = await response.json();
    //console.log(json);
    this.setState({
      priceUSDWOZX: json.items[0].xauPrice
    });

    return json.items[0].xauPrice;

  };

  async Wozx (){

    const { investedWozx } = this.state;

    document.getElementById("cantidadwozx").value = investedWozx;

  };

  async Wozx2 (){

    const { investedWozx } = this.state;

    document.getElementById("cantidadwozx2").value = investedWozx;

  };

  async Link() {
    const {registered} = this.state;
    if(registered){

      let loc = document.location.href;
      if(loc.indexOf('?')>0){
        loc = loc.split('?')[0];
        loc = loc.split('#')[0];
      }
      let mydireccion = await window.tronWeb.trx.getAccount();
      mydireccion = window.tronWeb.address.fromHex(mydireccion.address)
      mydireccion = loc+'?ref='+mydireccion;
      this.setState({
        link: mydireccion,
      });
    }else{
      this.setState({
        link: "Haz una inversión para obtener el LINK de referido",
      });
    }
  }

  async Investors() {

    await this.rateW();

    const { priceUSDWOZX} = this.state;

    var direccion = await window.tronWeb.trx.getAccount();
    direccion = direccion = window.tronWeb.address.fromHex(direccion.address);

    var investor = await Utils.contract.investors(direccion).call();
    var balanceOf = await Utils.contract.balanceOf(direccion).call();
    var balanceFrozen = await Utils.contract.balanceFrozen(direccion).call();

    var decimals = await Utils.contract.decimals().call();

    balanceFrozen = parseInt(balanceFrozen._hex)/10**decimals;
    balanceOf = parseInt(balanceOf._hex)/10**decimals;

    var depositos = [];

    var estilo = {};

    var texto = "UnFreez GPX-S";

    var reclamar = null;

    investor.ingresed = parseInt(investor.ingresed._hex)/10**decimals;
    investor.out = parseInt(investor.out._hex)/10**decimals;
    investor.paidAt = parseInt(investor.paidAt._hex);

    //console.log(investor);

    if(balanceFrozen > 0 || investor.out > 0){

      var deposito1 = await Utils.contract.viewDeposits(direccion,0).call();

      
      for (let i = 0; i < parseInt(deposito1[4]._hex); i++) {

        deposito1 = await Utils.contract.viewDeposits(direccion,i).call();

        deposito1[0] = parseInt(deposito1[0]._hex);
        deposito1[1] = parseInt(deposito1[1]._hex);
        deposito1[2] = parseInt(deposito1[2]._hex)/10**decimals;
        

        if(deposito1[3] && Date.now()/1000 > deposito1[1]){
          estilo = {'backgroundColor': 'green','color': 'white','borderBlockColor': 'green'};
          texto = "UnFreez GPX-S";
          reclamar = () => this.unfGpx();
        }else{
          estilo = {'backgroundColor': 'gray','color': 'white','borderBlockColor': 'gray'};

          if( investor.paidAt > deposito1[1]){
            texto = "Claimed";
          }else{
            texto = "UnFreez GPX-S";
          }
          
        }

        

        depositos[i] = 
        (
        <div className="row centrartexto" key={"deposito-"+i}>

          <div className="col-twelve">
          <hr style={{"border": "solid rgb(255 255 255)"}}></hr>

          <h1 className="subhead">Cantidad: {deposito1[2]}</h1>
          <hr></hr>

          </div>

          <div className="col-four">

              <h2 className="display-2--light"> Inicio: </h2>
              <small id="wozxHelp" className="form-text text-muted">{new Date(deposito1[0]*1000).toString()}</small>
              

          </div>
          <div className="col-four">

              <h2 className="display-2--light"> Fin: </h2>
              <small id="wozxHelp" className="form-text text-muted">{new Date(deposito1[1]*1000).toString()}</small>
              

          </div>

          <div className="col-four">

              <p>
              <button type="button" className="btn btn-light" style={estilo} onClick={reclamar}>{texto}</button>
              </p>
          </div>
      </div>
        );

      
      }

      //console.log(deposito1[3]);

    }

    this.setState({
      depositos: depositos
    });



 

    this.setState({
      direccion: direccion,
      balanceTrx: 100,
      withdrawnTrx: 0,
      investedWozx: balanceOf-balanceFrozen,
      withdrawnWozx: balanceFrozen,
      miPrecioWozx: balanceOf*priceUSDWOZX
    });

  };


  async enviarWozx(){

    const {investedWozx} = this.state;

    let direccion = document.getElementById("enviartronwozx").value;
    var cantidad = document.getElementById("cantidadwozx").value;
    cantidad = parseFloat(cantidad);

    var account =  await window.tronWeb.trx.getAccount();
    var accountAddress = account.address;
    accountAddress = window.tronWeb.address.fromHex(accountAddress);

    var result= false;

    if ( !window.tronWeb.isAddress(direccion) || accountAddress === direccion ) {

      window.alert("Please enter a correct address");
      document.getElementById("enviartronwozx").value = "";

    }else{


      if (cantidad <= 0 || isNaN(cantidad) || cantidad > investedWozx ) {
        window.alert("Please enter a correct amount");
        document.getElementById("cantidadwozx").value = "";

      }else{

        result = window.confirm("You are sure that you want to SEND "+cantidad+" GPX-S?, remember that this action cannot be reversed");

      }

    }

    account =  await window.tronWeb.trx.getAccount();
    accountAddress = account.address;
    accountAddress = window.tronWeb.address.fromHex(accountAddress);

    var id = await Utils.contract.transfer(direccion, parseInt(cantidad*10**8)).send();
    await delay(3000);
    var pago = await this.consultarTransaccion(id);

    if (result && pago ) {
      window.alert("Envio Exitoso");
    }else{
      window.alert("OOps.. Algo salio mal...");
    }

  };

  async enfGpx(){

    const {investedWozx} = this.state;

    let meses = document.getElementById("diasfreez").value;
    meses = parseInt(meses);
    var cantidad = document.getElementById("cantidadwozx2").value;
    cantidad = parseFloat(cantidad);


    var result= false;

    if ( meses < 12 ) {

      window.alert("ingrece un plazo mayor a 12 meses");
      document.getElementById("diasfreez").value = 12;

    }else{


      if (cantidad <= 0 || isNaN(cantidad) || cantidad > investedWozx ) {
        window.alert("Please enter a correct amount");
        document.getElementById("cantidadwozx").value = "";

      }else{

        result = window.confirm("You are sure that you want to SEND "+cantidad+" GPX-S to freez?, remember that this action cannot be reversed");

      }

    }

    if (result ) {
      var decimals = await Utils.contract.decimals().call();
      await Utils.contract.freezGPXS(parseInt(cantidad*10**decimals), meses*30*86400).send();
      window.alert("Envio Exitoso");
      document.getElementById("diasfreez").value = "";
      document.getElementById("cantidadwozx").value = "";
    }else{
      window.alert("Cancelado");
    }

  };

  async unfGpx(){

      await Utils.contract.unFreezGPXS().send();
  
  };


  render() {
    var {miPrecioWozx, investedWozx,  withdrawnWozx } = this.state;

    //console.log(investedWozx);

    return (

      <div id="officer" className="container">

        <header style={{'textAlign': 'center'}} className="section-header">
          <h3 className="white"><span style={{'fontWeight': 'bold'}}>
          My office:</span> <br></br>
          <span style={{'fontSize': '18px'}}>

            {this.state.direccion} <br />
            <span className="subhead">{investedWozx+withdrawnWozx} GPX-S =</span> $ {miPrecioWozx.toFixed(2)} USD <br />

          </span></h3><br />
          <hr></hr>

        </header>

        <div className="row centrartexto">

          <div className="col-five">

              <h1 className="subhead">Available</h1>
              <h3 className="display-2--light">{investedWozx} GPX-S</h3>
              <hr></hr>

          </div>

          <div className="col-seven">

              <h1 className="subhead">Frozen</h1>
              <h3 className="display-2--light">{withdrawnWozx} GPX-S</h3>
              <hr></hr>

          </div>
        </div>

        <hr />
       
        
        <div className="row centrartexto">

          <div className="col-seven">

              <h3 className="display-2--light"> Send GPX-S to USER:</h3>
              <input type="text" className="form-control" id="enviartronwozx" aria-describedby="emailHelp" placeholder="Tron wallet Member" />
              <small id="wozxHelp" className="form-text text-muted">Make sure the address is well written, once sent, this action cannot be reversed</small>


          </div>

          <div className="col-five">

              <h3 className="display-2--light" style={{cursor: "pointer"}} onClick={() => this.Wozx()}> Available <br></br> {investedWozx} GPX-S</h3>
              <input type="number" className="form-control" id="cantidadwozx" aria-describedby="emailHelp" placeholder="how much GPX-S" />
              <button type="button" className="btn btn-light" style={{'backgroundColor': 'red','color': 'white','borderBlockColor': 'red'}} onClick={() => this.enviarWozx()}>send GPX-S</button>

          </div>

          <hr />

        </div>

        <hr />

        <div className="row centrartexto" id="freezz">

          <div className="col-five">

              <h3 className="display-2--light"> Tiempo:</h3>
              <input type="text" className="form-control" id="diasfreez" aria-describedby="emailHelp" placeholder="Meses" />
              <small id="wozxHelp" className="form-text text-muted">solo numeros enteros mayores a 12</small>


          </div>

          <div className="col-seven">

              <h3 className="display-2--light" style={{cursor: "pointer"}} onClick={() => this.Wozx2()}> Available <br></br>{investedWozx} GPX-S</h3>
              <input type="number" className="form-control" id="cantidadwozx2" aria-describedby="emailHelp" placeholder="how much GPX-S" />
              <button type="button" className="btn btn-light" style={{'backgroundColor': 'orange','color': 'white','borderBlockColor': 'orange'}} onClick={() => this.enfGpx()}>Freez GPX-S</button>

          </div>

          <hr />

        </div>

        {this.state.depositos}

        <hr />

      </div>




    );
  }
}
