import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strTime: 0,
    };

    this.registrar = this.registrar.bind(this);
    this.hora = this.hora.bind(this);
    this.relog = this.relog.bind(this);

  }

  async componentDidMount() {

    setInterval(() => this.relog(),1*1000);

    

  }

  async registrar(){

  }

  hora(date){

      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; 
      minutes = minutes < 10 ? '0'+minutes : minutes;
      var strTime = hours + ':' + minutes + ' ' + ampm;
      
      return strTime;

  }

  relog(){

      var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    
    this.setState({
      strTime: strTime,
    });

}

  

  render() {

    return (
      <>
        <div className="wrap">
          <h2>Tabla Inflables EL SALTO | C.C. Unicentro</h2>
          <ul className="tabs">
            <li>
              <a href="#tab1">
                <span className="fa fa-home"></span>
                <span className="tab-text">Inicio</span>
              </a>
            </li>
            <li>
              <a href="#tab2">
                <span className="fa fa-group"></span>
                <span className="tab-text">En Juego</span>
              </a>
            </li>
            <li>
              <a href="#tab3">
                <span className="fa fa-briefcase"></span>
                <span className="tab-text">Afuera</span>
              </a>
            </li>
            <li>
              <a href="#tab4">
                <span className="fa fa-bookmark"></span>
                <span className="tab-text">Historial</span>
              </a>
            </li>
            <li>
              <a href="#tab1">
                <span className="fa fa-clock"></span>
                <span className="tab-text">{this.state.strTime}</span>
              </a>
            </li>
          </ul>

          <div className="secciones">
            <article id="tab1">
              <table className="table table-bordered">
                <caption>
                  <button
                    className="btn btn-primary"
                    onclick="RelojS();"
                    data-toggle="modal"
                    data-target="#modalNuevo"
                  >
                    Agregar <span className="glyphicon glyphicon-plus"></span>
                  </button>
                </caption>

                <tr className="table table-bordered">
                  <td>Nombre</td>
                  <td>Precio</td>
                  <td>Entrada</td>
                  <td>Salida</td>
                  <td>Editar</td>
                  <td>Eliminar</td>
                </tr>

                <tr id="1" className="table table-bordered">
                  <td>julian alberto</td>
                  <td>$10000</td>
                  <td>5:48 PM</td>
                  <td>6:00 PM</td>
                  <td>
                    <button
                      className="btn btn-warning glyphicon glyphicon-pencil"
                      data-toggle="modal"
                      data-target="#modalEdicion"
                      onclick="agregaform(' $datos ')"
                    ></button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger glyphicon glyphicon-remove"
                      onclick="preguntarSiNo(' $ver[0] ')"
                    ></button>
                  </td>
                </tr>

                
              </table>
            </article>
            <article id="tab2">
              <h1>Nosotros</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                voluptates unde, consequuntur aliquid architecto rem numquam
                expedita minima dolorem pariatur recusandae, eius quod quia
                aspernatur id impedit, tenetur! Aspernatur incidunt molestiae
                dolores animi ea praesentium ipsam tenetur voluptas cupiditate
                perspiciatis eum nihil, natus exercitationem libero earum fuga
                dignissimos impedit numquam, quasi, placeat officiis voluptates,
                ad reprehenderit fugiat? Fugiat aperiam et magni, molestiae,
                numquam consectetur vitae sapiente cupiditate totam laboriosam
                voluptate obcaecati, aliquam placeat? Suscipit dolores fuga
                laudantium sed, qui magni iusto dolore quia. Quis fugit
                exercitationem porro. Rerum nihil omnis recusandae ratione fuga
                alias eligendi, earum sunt veritatis praesentium eum
                perspiciatis. Molestias deserunt, iure neque animi quod! Impedit
                reprehenderit cumque, numquam velit quae cum eius quidem
                similique laudantium hic deleniti!
              </p>
            </article>
            <article id="tab3">
              <h1>Servicios</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                numquam odio voluptate. Aliquam incidunt similique, et quasi
                ducimus quos aut autem non dignissimos dicta sit provident,
                voluptatibus ut blanditiis perspiciatis cum, vel temporibus
                minima enim. Asperiores omnis placeat officiis a tenetur sit
                recusandae, reprehenderit neque. Tempora quibusdam, perferendis
                id ratione culpa dolorum! Nemo, animi?
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum dignissimos at esse, ipsum rerum assumenda nisi
                obcaecati! Aliquam iure voluptatem incidunt, explicabo sit
                labore, perferendis eius ad vel quia. Praesentium, doloribus.
                Quisquam provident nostrum totam itaque debitis, minima, tempore
                dolores!
              </p>
            </article>
            <article id="tab4">
              <h1>Blog</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
                numquam odio voluptate. Aliquam incidunt similique, et quasi
                ducimus quos aut autem non dignissimos dicta sit provident,
                voluptatibus ut blanditiis perspiciatis cum, vel temporibus
                minima enim. Asperiores omnis placeat officiis a tenetur sit
                recusandae, reprehenderit neque. Tempora quibusdam, perferendis
                id ratione culpa dolorum! Nemo, animi? Eveniet eaque
                perspiciatis, libero quia, pariatur iusto, ipsum porro quod, ut
                tempora cum quo non illum. Non eligendi incidunt sequi,
                molestias quia perspiciatis architecto repudiandae quod.
              </p>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
                ipsa ducimus amet at cumque sed numquam, explicabo impedit optio
                quas iste aperiam quidem ipsam rerum libero voluptatibus
                perferendis officiis voluptatum!
              </p>
            </article>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalNuevo"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Agrega nueva persona
                </h4>
              </div>
              <div className="modal-body">
                <label>Nombre del niño</label>
                <input
                  type="text"
                  name=""
                  id="nombre"
                  className="form-control input-sm"
                />
                <label>Responsable</label>
                <input
                  type="text"
                  name=""
                  id="apellido"
                  className="form-control input-sm"
                />
                <label>Entrada</label>
                <input
                  type="text"
                  id="email"
                  onclick="RelojS();"
                  className="form-control input-sm"
                />
                <label>salida</label>
                <input
                  type="text"
                  id="telefono"
                  className="form-control input-sm"
                />
                <label>Tiempo</label>
                <br />
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma3"
                >
                  +3 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma15"
                >
                  +15 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma30"
                >
                  +30 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma60"
                >
                  +60 min
                </button>
                <p>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onclick="RelojS();"
                    id="restablecer"
                  >
                    Reiniciar tiempo
                  </button>
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  id="guardarnuevo"
                >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="modalEdicion"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
        >
          <div className="modal-dialog modal-sm" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  Actualizar datos
                </h4>
              </div>
              <div className="modal-body">
                <input type="text" hidden="" id="idpersona" name="" />
                <label>Nombre del niño</label>
                <input
                  type="text"
                  name=""
                  id="nombreu"
                  className="form-control input-sm"
                />
                <label>Responsable</label>
                <input
                  type="text"
                  name=""
                  id="apellidou"
                  className="form-control input-sm"
                />
                <label>Entrada</label>
                <input
                  type="text"
                  name=""
                  id="emailu"
                  className="form-control input-sm"
                />
                <label>Salida</label>
                <input
                  type="text"
                  name=""
                  id="telefonou"
                  className="form-control input-sm"
                />
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma3u"
                >
                  +3 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma15u"
                >
                  +15 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma30u"
                >
                  +30 min
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onclick="RelojS();"
                  id="suma60u"
                >
                  +60 min
                </button>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-warning"
                  id="actualizadatos"
                  data-dismiss="modal"
                >
                  Actualizar
                </button>

                <button
                  type="button"
                  className="btn btn-danger close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true"> Cancelar &times;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;

// {tWeb()}
