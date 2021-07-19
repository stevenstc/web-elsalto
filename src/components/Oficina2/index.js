import React, { Component } from "react";
import Utils from "../../utils";
import contractAddress from "../Contract";

import cons from "../../cons.js";

const delay = ms => new Promise(res => setTimeout(res, ms));

export default class Oficina2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pago: false,
      ratetrx: "",
      ratewozx: "",
      tipo: "button",
      auth: "/auth.html",
      texto: "Loading...",
      texto3: "Buy GPX-S<- TRX",
      texto4:"Conect Wallet",
      fee: cons.FEEW,
      feetrx: cons.FEET,
      funcion: false,
      alerta: "alerta0",
      direccion: "",
      registered: false,
      balanceRef: 0,
      totalRef: 0,
      invested: 0,
      paidAt: 0,
      my: 0,
      withdrawn: 0,
      estilo:{'backgroundColor': 'green','color': 'white','borderBlockColor': 'green'},
      activar:null


    };

    this.Investors = this.Investors.bind(this);
    this.Wozx = this.Wozx.bind(this);
    this.Tron = this.Tron.bind(this);
    this.rateGPX = this.rateGPX.bind(this);


    this.consultarTransaccion = this.consultarTransaccion.bind(this);

    this.activeAcount = this.activeAcount.bind(this);
    this.venderGPXS = this.venderGPXS.bind(this);

    this.actualizarUsuario = this.actualizarUsuario.bind(this);
    this.actualizarUser = this.actualizarUser.bind(this);

    this.verifica = this.verifica.bind(this);


  }

  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    await this.Investors();
    await this.actualizarUser();
    await this.verifica();
    await this.actualizarUser();
    setInterval(() => this.Investors(),3*1000);
    setInterval(() => this.actualizarUser(),10*1000);

  };

  async actualizarUsuario( datos ){

    var direccion = await window.tronWeb.trx.getAccount();
    direccion = window.tronWeb.address.fromHex(direccion.address);
    
    datos.token = cons.MT;
    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'actualizar/'+direccion;
    const response = await fetch(proxyUrl+apiUrl, {
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
       body: JSON.stringify(datos)
    })
    .catch(error =>{console.error(error)})
    const json = await response.json();

    return json;

  };


  async consultarTransaccion(id){

    this.setState({
      texto3: "Updating balance..."
    });
    await delay(3000);
    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'consultar/transaccion/'+id;
    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)});
    const json = await response.json();
    this.setState({
      texto3: "Buy GPX-S <- TRX"
    });

    return json.result;

  };

  async Wozx (){

    const { investedWozx } = this.state;
    document.getElementById("amountWOZX").value = investedWozx;

  };

  async Tron (){

    const { balanceTrx } = this.state;
    document.getElementById("amountTRX").value = balanceTrx;

  };


  async rateGPX(){
    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'precio/gpxs/usd';
    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)})
    const json = await response.json();

    return json.data;

  };

  async actualizarUser(){
    var direccion = await window.tronWeb.trx.getAccount();
    direccion = window.tronWeb.address.fromHex(direccion.address);

    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'actualizar/'+direccion;
    const response = await fetch(proxyUrl+apiUrl)
    .catch(error =>{console.error(error)})
    const json = await response.json();
    
    console.log(json);

  };

  async verifica() {

    let loc = document.location.href;

    if (loc.indexOf('?')>0 ) {

      loc = loc.split('?')[1];
      loc = loc.split('&');

      if (loc[5].split('=')[1] === "true" ) {

        this.activeAcount();
      }

    }

  }


  async Investors() {

    var direccion = await window.tronWeb.trx.getAccount();
    direccion = window.tronWeb.address.fromHex(direccion.address);

    let My = await Utils.contract.MYwithdrawable().call();
    let decimals = await Utils.contract.decimals().call();
    var balanceOf = await Utils.contract.balanceOf(direccion).call();

    balanceOf = parseInt(balanceOf._hex)/10**decimals;

    var ids = await Utils.contract.ids(direccion).call();

    var estilo;
    var activar;
    var texto4;

    if(ids){

      estilo = {'backgroundColor': 'gray','color': 'white','borderBlockColor': 'gray'};
      activar = null;
      texto4 = "Wallet Conected";

    }else{

      estilo = {'backgroundColor': 'green','color': 'white','borderBlockColor': 'green'};
      activar = () => this.activeAcount();
      texto4 = "Conect Wallet";

    }

    this.setState({
      direccion: direccion,
      balanceTrx: 100,
      investedWozx: balanceOf,
      mywithdrawableWozx: parseInt(My._hex)/10**decimals,
      activar: activar,
      estilo: estilo,
      texto4: texto4
    });

  };


  async activeAcount(){
    let loc = document.location.href;

    let mydireccion = await window.tronWeb.trx.getAccount();
    mydireccion = window.tronWeb.address.fromHex(mydireccion.address)

    var proxyUrl = cons.proxy;
    var apiUrl = cons.mongo+'registrar/'+mydireccion;

    var datos = {};

    datos.token = cons.MT;

    if( loc.indexOf('?') > 0){
      loc = loc.split('?')[1];
      loc = loc.split('&');

      datos.id = loc[0].split('=')[1];
      var wallet = loc[1].split('=')[1];
      var amount = loc[2].split('=')[1];
      var time = loc[3].split('=')[1];
      datos.txhash = loc[4].split('=')[1];


      if(mydireccion === wallet){

        var investor = await Utils.contract.investors(mydireccion).call();


        if ( parseInt(investor.id) === 0 ) {

          await Utils.contract.claimAcount(datos.id).send();

          const response = await fetch(proxyUrl+apiUrl, {
              method: 'POST',
              headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
              body: JSON.stringify(datos)
          })
          .catch(error =>{console.error(error)})
          const json = await response.json();
          console.log(json);

        }
        
        var GPX = await this.rateGPX();


        time = time*2629800;
        amount = amount*GPX.usd.gpxs*100000000;


        await Utils.contract.freezGPXS(parseInt(amount), time).send();

      }else{
        window.alert("Please go back and try again");
      }
 
    }

  };

  async venderGPXS(moneda){

    const {investedWozx} = this.state;

    var amount = document.getElementById("amountWOZX").value;
    amount = parseFloat(amount);

    var ope = cons.FEEW*2;
    var result = false;

    if ( amount >= ope ) {

      if (amount <= 0 || isNaN(amount) || amount > investedWozx) {
        window.alert("Please enter a correct amount");

      }else{
        result = window.confirm("You are sure you want to SELL "+amount+" GPX-S?, remember that this action cannot be reversed");

      }
    }else{
      window.alert("The minimum to operate is "+ope+" GPX-S");
    }

    amount = amount.toFixed(8);
    amount = parseFloat(amount);

    var id = await Utils.contract.transfer(cons.WS, amount*100000000 ).send();
    await delay(3000);
    var pago = await this.consultarTransaccion(id);

    if (result && amount > 0 && investedWozx > 0 && amount <= investedWozx && pago ){

      var direccion = await window.tronWeb.trx.getAccount();
      direccion = window.tronWeb.address.fromHex(direccion.address);

      var apiUrl = cons.mongo+'consultar/'+direccion;
      const response = await fetch(cons.proxy+apiUrl)
      .catch(error =>{console.error(error)})
      var nuevoDato = await response.json();

      nuevoDato.historial.push({
        cantidad: amount,
        metodo: moneda,
        fecha: Date.now(),
        realizado: false,
        fechaEnvio: 0

      })


      await this.actualizarUsuario( nuevoDato );

    }else{
        window.alert("oops!! someting wrong!");

    }



    document.getElementById("amountWOZX").value = "";

   

  }; 


  render() {
    var { investedWozx, texto4 } = this.state;

  

    investedWozx = parseFloat(investedWozx);
    investedWozx  = investedWozx.toFixed(4);


    return (

      <div className="container">

        <div id="invested_wozx2" className="row">

        
          <div className="subhead" >
            <div className="box">
              <a href="https://office.goldprimexuma.org"><button type="button" className="btn btn-info" style={{'backgroundColor': 'green','color': 'white','borderBlockColor': 'green'}} >Dashboard</button></a>

              <button type="button" className="btn btn-info" style={this.state.estilo} onClick={this.state.activar}>{texto4}</button>

              <a href="https://goldprimex.org/tso/login"><button type="button" className="btn btn-info" style={{'backgroundColor': 'green','color': 'white','borderBlockColor': 'green'}} >BUY GPX-S</button></a>
              <hr></hr>

              <h3 className="display-2--light" style={{cursor: "pointer"}} onClick={() => this.Wozx()}>Available: <br></br>{investedWozx} GPX-S</h3>
              

              <input type="number" className="form-control amount" id="amountWOZX" placeholder="1.00000001"></input>
              
              <button type="button" className="btn btn-info" style={{'backgroundColor': 'red','color': 'white','borderBlockColor': 'red'}} onClick={() => this.venderGPXS("trx")}>SELL GPX-S -> TRX</button>
              <button type="button" className="btn btn-info" style={{'backgroundColor': 'red','color': 'white','borderBlockColor': 'red'}} onClick={() => this.venderGPXS("usdt")}>SELL GPX-S -> USDT</button>
              <button type="button" className="btn btn-info" style={{'backgroundColor': 'red','color': 'white','borderBlockColor': 'red'}} onClick={() => this.venderGPXS("fiat")}>SELL GPX-S -> Fiat</button>
              
              <hr></hr>
              


            </div>
          </div>

        </div>

      </div>




    );
  }
}
