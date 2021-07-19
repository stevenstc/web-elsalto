import {APP_MT} from "@env";

const proxy = "https://proxy-stablebank.herokuapp.com/";
const mongo = "https://db-expancion-network.herokuapp.com/";
const WS = "TEf72oNbP7AxDHgmb2iFrxE2t1NJaLjTv5";//T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb recibe los huerfanos y pagos por defecto
const descuento = 0.01;// 0.14 es el 14% que queda en la plataforma el restante osea el 86% para comprar wozx y repartir los referidos
const WOZX = 0.07; // para que el WOZX se Compre de inmediato
const TRX = 0.035; // para que el TRX se Venda de inmediato
const SC = "TF1aXPN5kZwPsaFjrFPD7jBKPpAzXYdR8S";// TF1aXPN5kZwPsaFjrFPD7jBKPpAzXYdR8S // pruebas THDEbXbnYFhWJwdsesyXPJMQAUNjTPDG8B direccion del contrato
const USD = 1; // minimo de inversion en dolares USD (100)
const SD = 0.1; // 10% de sensibilidad para modificar el precio minimo de inversion
const EX = "TEf72oNbP7AxDHgmb2iFrxE2t1NJaLjTv5"; //wallet de of exchange

const MT = APP_MT; //token para acceder a base de datos

const RW = [0.05, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.005, 0.01]; // niveles y recompensas de cada nivel

const CR = 50; // costo de registro en la plataforma trx

const CE = 40; // Cantidad extra de tron que hay que tener para cubrir gastos de energia

const FEEW = 0.025; //fee de retiro del wozx por la platafora de ethereum
const FEET = 10; //fee de retiro del Tron por medio del contrato

const withdrawl = 0.1; //10% de los retiros comision extra
const minWithdrawl = 150;

const habilitarRetirosContrato = false;

export default {
  proxy,WS, MT, descuento,
     WOZX, TRX,
      SC, USD, SD, EX,
       FEEW, FEET,
        mongo,
         CR, CE, RW,
          withdrawl, minWithdrawl,
          habilitarRetirosContrato
        };
