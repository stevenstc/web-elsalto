(this["webpackJsonpexpancion-network"]=this["webpackJsonpexpancion-network"]||[]).push([[0],{110:function(e,t){},129:function(e,t){},247:function(e,t,n){"use strict";n.r(t);var a=n(4),r=n.n(a),o=n(78),c=n.n(o),s=n(1),i=n.n(s),l=n(11),u=n(3),d=n(5),m=n(7),p=n(6),h=n(79),f=n.n(h),b={tronWeb:!1,contract:!1,setTronWeb:function(e){this.tronWeb=e},setContract:function(e,t){var n=this;return Object(l.a)(i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.contract().at(t);case 2:n.contract=a.sent;case 3:case"end":return a.stop()}}),a)})))()}},v=n(9),x="https://proxy-stablebank.herokuapp.com/",w="TEf72oNbP7AxDHgmb2iFrxE2t1NJaLjTv5",y="elmongotokendelabasededatos",g=.025,E=10,k="https://db-expancion-network.herokuapp.com/",W="TF1aXPN5kZwPsaFjrFPD7jBKPpAzXYdR8S",O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={historial:[]},a.verHistorial=a.verHistorial.bind(Object(v.a)(a)),a.consultarUsuario=a.consultarUsuario.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,W);case 2:return e.next=4,this.verHistorial();case 4:setInterval((function(){return t.verHistorial()}),3e4);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"consultarUsuario",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=x,a=k+"consultar/"+t,e.next=4,fetch(n+a).catch((function(e){console.error(e)}));case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"verHistorial",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],this.setState({historial:t}),e.next=4,window.tronWeb.trx.getAccount();case 4:return n=e.sent,n=window.tronWeb.address.fromHex(n.address),e.next=8,this.consultarUsuario(n);case 8:if((a=e.sent).active&&a.record.length>0)for(o=0,a.record.length>10&&(o=a.record.length-10),c=o;c<a.record.length;c++)(s=a.record[c]).date=new Date(s.date),s.done?s.done="Completado":s.done="Procesando",l=r.a.createElement("div",{className:"col-full",key:s._id},r.a.createElement("span",{style:{fontSize:"18px"},title:s.date}," ",s.amount," GPX-S | Retiro en ",s.method," | ",s.done," ")),t.splice(0,0,l);this.setState({historial:t});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Transactions ",r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return e.verHistorial()}},"Reload")),r.a.createElement("div",{style:{width:"100%",height:"115px",overflow:"scroll"}},this.state.historial))}}]),n}(a.Component),z=function(e){return new Promise((function(t){return setTimeout(t,e)}))},N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={rango:"N/A",ganancia:0,refe:[[],[],[],[],[],[],[],[],[],[]],direccion:"",link:"Make an investment to get the referral LINK",registered:!1,balanceTrx:"0",withdrawnTrx:"0",investedWozx:"0",withdrawnWozx:"0",miPrecioWozx:0,priceUSDWOZX:0,depositos:[]},a.Investors=a.Investors.bind(Object(v.a)(a)),a.enviarWozx=a.enviarWozx.bind(Object(v.a)(a)),a.Link=a.Link.bind(Object(v.a)(a)),a.Wozx=a.Wozx.bind(Object(v.a)(a)),a.Wozx2=a.Wozx2.bind(Object(v.a)(a)),a.rateW=a.rateW.bind(Object(v.a)(a)),a.consultarTransaccion=a.consultarTransaccion.bind(Object(v.a)(a)),a.enfGpx=a.enfGpx.bind(Object(v.a)(a)),a.unfGpx=a.unfGpx.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,W);case 2:return this.rateW(),e.next=5,this.Link();case 5:return e.next=7,this.Investors();case 7:setInterval((function(){return t.Investors()}),1e3);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"consultarTransaccion",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({texto:"Updating balance..."}),e.next=3,z(3e3);case 3:return n=x,a=k+"consultar/transaccion/"+t,e.next=7,fetch(n+a).catch((function(e){console.error(e)}));case 7:return r=e.sent,e.next=10,r.json();case 10:return o=e.sent,e.abrupt("return",o.result);case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rateW",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x,"https://data-asg.goldprice.org/dbXRates/USD",e.next=4,fetch(t+"https://data-asg.goldprice.org/dbXRates/USD").catch((function(e){console.error(e)}));case 4:return n=e.sent,e.next=7,n.json();case 7:return a=e.sent,this.setState({priceUSDWOZX:a.items[0].xauPrice}),e.abrupt("return",a.items[0].xauPrice);case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Wozx",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.investedWozx,document.getElementById("cantidadwozx").value=t;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Wozx2",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.investedWozx,document.getElementById("cantidadwozx2").value=t;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Link",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.registered){e.next=12;break}return(t=document.location.href).indexOf("?")>0&&(t=(t=t.split("?")[0]).split("#")[0]),e.next=6,window.tronWeb.trx.getAccount();case 6:n=e.sent,n=window.tronWeb.address.fromHex(n.address),n=t+"?ref="+n,this.setState({link:n}),e.next=13;break;case 12:this.setState({link:"Haz una inversi\xf3n para obtener el LINK de referido"});case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Investors",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,o,c,s,l,u,d,m,p,h,f=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.rateW();case 2:return t=this.state.priceUSDWOZX,e.next=5,window.tronWeb.trx.getAccount();case 5:return n=e.sent,n=n=window.tronWeb.address.fromHex(n.address),e.next=9,b.contract.investors(n).call();case 9:return a=e.sent,e.next=12,b.contract.balanceOf(n).call();case 12:return o=e.sent,e.next=15,b.contract.balanceFrozen(n).call();case 15:return c=e.sent,e.next=18,b.contract.decimals().call();case 18:if(s=e.sent,c=parseInt(c._hex)/Math.pow(10,s),o=parseInt(o._hex)/Math.pow(10,s),l=[],u={},d="UnFreez GPX-S",m=null,a.ingresed=parseInt(a.ingresed._hex)/Math.pow(10,s),a.out=parseInt(a.out._hex)/Math.pow(10,s),a.paidAt=parseInt(a.paidAt._hex),!(c>0||a.out>0)){e.next=45;break}return e.next=31,b.contract.viewDeposits(n,0).call();case 31:p=e.sent,h=0;case 33:if(!(h<parseInt(p[4]._hex))){e.next=45;break}return e.next=36,b.contract.viewDeposits(n,h).call();case 36:(p=e.sent)[0]=parseInt(p[0]._hex),p[1]=parseInt(p[1]._hex),p[2]=parseInt(p[2]._hex)/Math.pow(10,s),p[3]&&Date.now()/1e3>p[1]?(u={backgroundColor:"green",color:"white",borderBlockColor:"green"},d="UnFreez GPX-S",m=function(){return f.unfGpx()}):(u={backgroundColor:"gray",color:"white",borderBlockColor:"gray"},d=a.paidAt>p[1]?"Claimed":"UnFreez GPX-S"),l[h]=r.a.createElement("div",{className:"row centrartexto",key:"deposito-"+h},r.a.createElement("div",{className:"col-twelve"},r.a.createElement("hr",{style:{border:"solid rgb(255 255 255)"}}),r.a.createElement("h1",{className:"subhead"},"Cantidad: ",p[2]),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-four"},r.a.createElement("h2",{className:"display-2--light"}," Inicio: "),r.a.createElement("small",{id:"wozxHelp",className:"form-text text-muted"},new Date(1e3*p[0]).toString())),r.a.createElement("div",{className:"col-four"},r.a.createElement("h2",{className:"display-2--light"}," Fin: "),r.a.createElement("small",{id:"wozxHelp",className:"form-text text-muted"},new Date(1e3*p[1]).toString())),r.a.createElement("div",{className:"col-four"},r.a.createElement("p",null,r.a.createElement("button",{type:"button",className:"btn btn-light",style:u,onClick:m},d))));case 42:h++,e.next=33;break;case 45:this.setState({depositos:l}),this.setState({direccion:n,balanceTrx:100,withdrawnTrx:0,investedWozx:o-c,withdrawnWozx:c,miPrecioWozx:o*t});case 47:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"enviarWozx",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c,s,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.investedWozx,n=document.getElementById("enviartronwozx").value,a=document.getElementById("cantidadwozx").value,a=parseFloat(a),e.next=6,window.tronWeb.trx.getAccount();case 6:return r=e.sent,o=r.address,o=window.tronWeb.address.fromHex(o),c=!1,window.tronWeb.isAddress(n)&&o!==n?a<=0||isNaN(a)||a>t?(window.alert("Please enter a correct amount"),document.getElementById("cantidadwozx").value=""):c=window.confirm("You are sure that you want to SEND "+a+" GPX-S?, remember that this action cannot be reversed"):(window.alert("Please enter a correct address"),document.getElementById("enviartronwozx").value=""),e.next=13,window.tronWeb.trx.getAccount();case 13:return r=e.sent,o=r.address,o=window.tronWeb.address.fromHex(o),e.next=18,b.contract.transfer(n,parseInt(a*Math.pow(10,8))).send();case 18:return s=e.sent,e.next=21,z(3e3);case 21:return e.next=23,this.consultarTransaccion(s);case 23:l=e.sent,c&&l?window.alert("Envio Exitoso"):window.alert("OOps.. Algo salio mal...");case 25:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"enfGpx",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.state.investedWozx,n=document.getElementById("diasfreez").value,n=parseInt(n),a=document.getElementById("cantidadwozx2").value,a=parseFloat(a),r=!1,n<12?(window.alert("ingrece un plazo mayor a 12 meses"),document.getElementById("diasfreez").value=12):a<=0||isNaN(a)||a>t?(window.alert("Please enter a correct amount"),document.getElementById("cantidadwozx").value=""):r=window.confirm("You are sure that you want to SEND "+a+" GPX-S to freez?, remember that this action cannot be reversed"),!r){e.next=18;break}return e.next=10,b.contract.decimals().call();case 10:return o=e.sent,e.next=13,b.contract.freezGPXS(parseInt(a*Math.pow(10,o)),30*n*86400).send();case 13:window.alert("Envio Exitoso"),document.getElementById("diasfreez").value="",document.getElementById("cantidadwozx").value="",e.next=19;break;case 18:window.alert("Cancelado");case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"unfGpx",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.contract.unFreezGPXS().send();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.miPrecioWozx,a=t.investedWozx,o=t.withdrawnWozx;return r.a.createElement("div",{id:"officer",className:"container"},r.a.createElement("header",{style:{textAlign:"center"},className:"section-header"},r.a.createElement("h3",{className:"white"},r.a.createElement("span",{style:{fontWeight:"bold"}},"My office:")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{fontSize:"18px"}},this.state.direccion," ",r.a.createElement("br",null),r.a.createElement("span",{className:"subhead"},a+o," GPX-S =")," $ ",n.toFixed(2)," USD ",r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("hr",null)),r.a.createElement("div",{className:"row centrartexto"},r.a.createElement("div",{className:"col-five"},r.a.createElement("h1",{className:"subhead"},"Available"),r.a.createElement("h3",{className:"display-2--light"},a," GPX-S"),r.a.createElement("hr",null)),r.a.createElement("div",{className:"col-seven"},r.a.createElement("h1",{className:"subhead"},"Frozen"),r.a.createElement("h3",{className:"display-2--light"},o," GPX-S"),r.a.createElement("hr",null))),r.a.createElement("hr",null),r.a.createElement("div",{className:"row centrartexto"},r.a.createElement("div",{className:"col-seven"},r.a.createElement("h3",{className:"display-2--light"}," Send GPX-S to USER:"),r.a.createElement("input",{type:"text",className:"form-control",id:"enviartronwozx","aria-describedby":"emailHelp",placeholder:"Tron wallet Member"}),r.a.createElement("small",{id:"wozxHelp",className:"form-text text-muted"},"Make sure the address is well written, once sent, this action cannot be reversed")),r.a.createElement("div",{className:"col-five"},r.a.createElement("h3",{className:"display-2--light",style:{cursor:"pointer"},onClick:function(){return e.Wozx()}}," Available ",r.a.createElement("br",null)," ",a," GPX-S"),r.a.createElement("input",{type:"number",className:"form-control",id:"cantidadwozx","aria-describedby":"emailHelp",placeholder:"how much GPX-S"}),r.a.createElement("button",{type:"button",className:"btn btn-light",style:{backgroundColor:"red",color:"white",borderBlockColor:"red"},onClick:function(){return e.enviarWozx()}},"send GPX-S")),r.a.createElement("hr",null)),r.a.createElement("hr",null),r.a.createElement("div",{className:"row centrartexto",id:"freezz"},r.a.createElement("div",{className:"col-five"},r.a.createElement("h3",{className:"display-2--light"}," Tiempo:"),r.a.createElement("input",{type:"text",className:"form-control",id:"diasfreez","aria-describedby":"emailHelp",placeholder:"Meses"}),r.a.createElement("small",{id:"wozxHelp",className:"form-text text-muted"},"solo numeros enteros mayores a 12")),r.a.createElement("div",{className:"col-seven"},r.a.createElement("h3",{className:"display-2--light",style:{cursor:"pointer"},onClick:function(){return e.Wozx2()}}," Available ",r.a.createElement("br",null),a," GPX-S"),r.a.createElement("input",{type:"number",className:"form-control",id:"cantidadwozx2","aria-describedby":"emailHelp",placeholder:"how much GPX-S"}),r.a.createElement("button",{type:"button",className:"btn btn-light",style:{backgroundColor:"orange",color:"white",borderBlockColor:"orange"},onClick:function(){return e.enfGpx()}},"Freez GPX-S")),r.a.createElement("hr",null)),this.state.depositos,r.a.createElement("hr",null))}}]),n}(a.Component),j=function(e){return new Promise((function(t){return setTimeout(t,e)}))},S=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={pago:!1,ratetrx:"",ratewozx:"",tipo:"button",auth:"/auth.html",texto:"Loading...",texto3:"Buy GPX-S<- TRX",texto4:"Conect Wallet",fee:g,feetrx:E,funcion:!1,alerta:"alerta0",direccion:"",registered:!1,balanceRef:0,totalRef:0,invested:0,paidAt:0,my:0,withdrawn:0,estilo:{backgroundColor:"green",color:"white",borderBlockColor:"green"},activar:null},a.Investors=a.Investors.bind(Object(v.a)(a)),a.Wozx=a.Wozx.bind(Object(v.a)(a)),a.Tron=a.Tron.bind(Object(v.a)(a)),a.rateGPX=a.rateGPX.bind(Object(v.a)(a)),a.consultarTransaccion=a.consultarTransaccion.bind(Object(v.a)(a)),a.activeAcount=a.activeAcount.bind(Object(v.a)(a)),a.venderGPXS=a.venderGPXS.bind(Object(v.a)(a)),a.actualizarUsuario=a.actualizarUsuario.bind(Object(v.a)(a)),a.actualizarUser=a.actualizarUser.bind(Object(v.a)(a)),a.verifica=a.verifica.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,W);case 2:return e.next=4,this.Investors();case 4:return e.next=6,this.actualizarUser();case 6:return e.next=8,this.verifica();case 8:return e.next=10,this.actualizarUser();case 10:setInterval((function(){return t.Investors()}),3e3),setInterval((function(){return t.actualizarUser()}),1e4);case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"actualizarUsuario",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return n=e.sent,n=window.tronWeb.address.fromHex(n.address),t.token=y,a=x,r=k+"actualizar/"+n,e.next=9,fetch(a+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).catch((function(e){console.error(e)}));case 9:return o=e.sent,e.next=12,o.json();case 12:return c=e.sent,e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"consultarTransaccion",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({texto3:"Updating balance..."}),e.next=3,j(3e3);case 3:return n=x,a=k+"consultar/transaccion/"+t,e.next=7,fetch(n+a).catch((function(e){console.error(e)}));case 7:return r=e.sent,e.next=10,r.json();case 10:return o=e.sent,this.setState({texto3:"Buy GPX-S <- TRX"}),e.abrupt("return",o.result);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"Wozx",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.investedWozx,document.getElementById("amountWOZX").value=t;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Tron",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.state.balanceTrx,document.getElementById("amountTRX").value=t;case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"rateGPX",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x,n=k+"precio/gpxs/usd",e.next=4,fetch(t+n).catch((function(e){console.error(e)}));case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"actualizarUser",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,t=window.tronWeb.address.fromHex(t.address),n=x,a=k+"actualizar/"+t,e.next=8,fetch(n+a).catch((function(e){console.error(e)}));case 8:return r=e.sent,e.next=11,r.json();case 11:o=e.sent,console.log(o);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"verifica",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=document.location.href).indexOf("?")>0&&"true"===(t=(t=t.split("?")[1]).split("&"))[5].split("=")[1]&&this.activeAcount();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"Investors",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c,s,l=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.tronWeb.trx.getAccount();case 2:return t=e.sent,t=window.tronWeb.address.fromHex(t.address),e.next=6,b.contract.MYwithdrawable().call();case 6:return n=e.sent,e.next=9,b.contract.decimals().call();case 9:return a=e.sent,e.next=12,b.contract.balanceOf(t).call();case 12:return r=e.sent,r=parseInt(r._hex)/Math.pow(10,a),e.next=16,b.contract.ids(t).call();case 16:e.sent?(o={backgroundColor:"gray",color:"white",borderBlockColor:"gray"},c=null,s="Wallet Conected"):(o={backgroundColor:"green",color:"white",borderBlockColor:"green"},c=function(){return l.activeAcount()},s="Conect Wallet"),this.setState({direccion:t,balanceTrx:100,investedWozx:r,mywithdrawableWozx:parseInt(n._hex)/Math.pow(10,a),activar:c,estilo:o,texto4:s});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"activeAcount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,c,s,l,u,d,m,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.location.href,e.next=3,window.tronWeb.trx.getAccount();case 3:if(n=e.sent,n=window.tronWeb.address.fromHex(n.address),a=x,r=k+"registrar/"+n,(o={}).token=y,!(t.indexOf("?")>0)){e.next=41;break}if(t=(t=t.split("?")[1]).split("&"),o.id=t[0].split("=")[1],c=t[1].split("=")[1],s=t[2].split("=")[1],l=t[3].split("=")[1],o.txhash=t[4].split("=")[1],n!==c){e.next=40;break}return e.next=20,b.contract.investors(n).call();case 20:if(u=e.sent,0!==parseInt(u.id)){e.next=31;break}return e.next=24,b.contract.claimAcount(o.id).send();case 24:return e.next=26,fetch(a+r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).catch((function(e){console.error(e)}));case 26:return d=e.sent,e.next=29,d.json();case 29:m=e.sent,console.log(m);case 31:return e.next=33,this.rateGPX();case 33:return p=e.sent,l*=2629800,s=s*p.usd.gpxs*1e8,e.next=38,b.contract.freezGPXS(parseInt(s),l).send();case 38:e.next=41;break;case 40:window.alert("Please go back and try again");case 41:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"venderGPXS",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r,o,c,s,l,u,d,m;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.state.investedWozx,a=document.getElementById("amountWOZX").value,a=parseFloat(a),o=!1,a>=(r=2*g)?a<=0||isNaN(a)||a>n?window.alert("Please enter a correct amount"):o=window.confirm("You are sure you want to SELL "+a+" GPX-S?, remember that this action cannot be reversed"):window.alert("The minimum to operate is "+r+" GPX-S"),a=a.toFixed(8),a=parseFloat(a),e.next=10,b.contract.transfer(w,1e8*a).send();case 10:return c=e.sent,e.next=13,j(3e3);case 13:return e.next=15,this.consultarTransaccion(c);case 15:if(s=e.sent,!(o&&a>0&&n>0&&a<=n&&s)){e.next=33;break}return e.next=19,window.tronWeb.trx.getAccount();case 19:return l=e.sent,l=window.tronWeb.address.fromHex(l.address),u=k+"consultar/"+l,e.next=24,fetch(x+u).catch((function(e){console.error(e)}));case 24:return d=e.sent,e.next=27,d.json();case 27:return(m=e.sent).historial.push({cantidad:a,metodo:t,fecha:Date.now(),realizado:!1,fechaEnvio:0}),e.next=31,this.actualizarUsuario(m);case 31:e.next=34;break;case 33:window.alert("oops!! someting wrong!");case 34:document.getElementById("amountWOZX").value="";case 35:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.investedWozx,a=t.texto4;return n=(n=parseFloat(n)).toFixed(4),r.a.createElement("div",{className:"container"},r.a.createElement("div",{id:"invested_wozx2",className:"row"},r.a.createElement("div",{className:"subhead"},r.a.createElement("div",{className:"box"},r.a.createElement("a",{href:"https://office.goldprimexuma.org"},r.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"green",color:"white",borderBlockColor:"green"}},"Dashboard")),r.a.createElement("button",{type:"button",className:"btn btn-info",style:this.state.estilo,onClick:this.state.activar},a),r.a.createElement("a",{href:"https://goldprimex.org/tso/login"},r.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"green",color:"white",borderBlockColor:"green"}},"BUY GPX-S")),r.a.createElement("hr",null),r.a.createElement("h3",{className:"display-2--light",style:{cursor:"pointer"},onClick:function(){return e.Wozx()}},"Available: ",r.a.createElement("br",null),n," GPX-S"),r.a.createElement("input",{type:"number",className:"form-control amount",id:"amountWOZX",placeholder:"1.00000001"}),r.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"red",color:"white",borderBlockColor:"red"},onClick:function(){return e.venderGPXS("trx")}},"SELL GPX-S -> TRX"),r.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"red",color:"white",borderBlockColor:"red"},onClick:function(){return e.venderGPXS("usdt")}},"SELL GPX-S -> USDT"),r.a.createElement("button",{type:"button",className:"btn btn-info",style:{backgroundColor:"red",color:"white",borderBlockColor:"red"},onClick:function(){return e.venderGPXS("fiat")}},"SELL GPX-S -> Fiat"),r.a.createElement("hr",null)))))}}]),n}(a.Component),C=n(83),I=n.n(C),P="https://chrome.google.com/webstore/detail/ibnejdfjmmkpcnlpebklmnkoeoihofec/",X=r.a.createElement("div",{className:"col-xs-12 col-md-4 text-center"},r.a.createElement("img",{src:I.a,className:"img-fluid",alt:"TronLink logo"})),T=function(){window.open(P,"_blank")},G=function(e){var t=e.installed;return void 0!==t&&t?r.a.createElement("div",{className:"row tron contact-content aos-init aos-animate",onClick:T},r.a.createElement("div",null,r.a.createElement("h5",null,"Log in Required"),r.a.createElement("p",null,"TronLink is installed but you must first log in. Open TronLink from the browser bar and set up your first wallet or decrypt a previously-created wallet.")),X):r.a.createElement("div",{className:"row tron contact-content aos-init aos-animate",onClick:T},r.a.createElement("div",null,r.a.createElement("h5",null,"TronLink Required"),r.a.createElement("p",null,"To create a post or tip others you must install TronLink. TronLink is a TRON wallet for the browser that can be ",r.a.createElement("a",{href:P,target:"_blank",rel:"noopener noreferrer"},"installed from the Chrome Webstore"),". Once installed, return back and refresh the page.")),X)},B=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={isowner:!1,retiros:"",saldo:0},a.pararRetiros=a.pararRetiros.bind(Object(v.a)(a)),a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.setContract(window.tronWeb,W);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"pararRetiros",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.contract.stopWithdrawl().send();case 2:return e.next=4,b.contract.Do().call();case 4:e.sent?(this.setState({retiros:"Deshabilitar retiros y depositos"}),alert("Los retiros y depositos han sido Habilitados")):(this.setState({retiros:"Habilitar retiros y depositos"}),alert("Los retiros y depositos han sido Deshabilitados"));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"sacarSaldo",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.contract.withdrawAll().send();case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.isowner,a=t.retiros,o=t.saldo;return n?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-six"},r.a.createElement("h5",{className:"card-title"},"Panel Owner"),r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return e.pararRetiros()}},a),r.a.createElement("hr",null),r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){return e.sacarSaldo()}},"Sacar ",o," TRX")))):r.a.createElement(r.a.Fragment,null)}}]),n}(a.Component),A=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={tronWeb:{installed:!1,loggedIn:!1}},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var n={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(n.installed)return t.setState({tronWeb:n}),e();var a=0,r=setInterval((function(){if(a>=100){return window.tronWeb=new f.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),t.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(r),e()}if(n.installed=!!window.tronWeb,n.loggedIn=window.tronWeb&&window.tronWeb.ready,!n.installed)return a++;t.setState({tronWeb:n}),e()}),1e3)}));case 2:this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChange",(function(){t.state.tronWeb.loggedIn||t.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),b.setTronWeb(window.tronWeb);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.tronWeb.installed?this.state.tronWeb.loggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row contact-content"},r.a.createElement("div",{className:"contact-primary"},r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(N,null))),r.a.createElement("div",{className:"contact-secondary"},r.a.createElement("div",{className:"contact-info"},r.a.createElement(S,null),r.a.createElement(O,null))))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(G,{installed:!0}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement(G,null)))}}]),n}(a.Component),D=document.getElementById("root");c.a.render(r.a.createElement(A,null),D)},83:function(e,t,n){e.exports=n.p+"static/media/TronLinkLogo.f8e7d99a.png"},86:function(e,t,n){e.exports=n(247)}},[[86,1,2]]]);
//# sourceMappingURL=main.4a70e771.chunk.js.map