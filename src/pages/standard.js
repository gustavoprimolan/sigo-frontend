import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Footer from "../elements/footer";
import { getStandards, deleteStandard } from "../api/standard-api";

export default class Standard extends Component {
  state = {
    standards: [],
    toDashboard: false,
    isLoading: false,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    const standards = await getStandards();
    console.log(standards);
    this.setState({ standards });
  }

  handleClickDelete = async (event) => {
    const standardId = event.target.value;
    const deleted = await deleteStandard(standardId);
    if (deleted) {
      this.componentDidMount();
      this.setState({ isLoading: true });
    }
  };

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Gestão de Normas</li>
                <li className="ml-auto">
                  <Link to={"add-standard"}>Adicionar Norma</Link>
                </li>
              </ol>
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table"></i>
                  &nbsp;&nbsp;Gestão de Normas
                </div>
                <div className="card-body">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Norma</th>
                        <th>Título</th>
                        <th>Idioma</th>
                        <th>Data Publicação</th>
                        <th>Data início da validade</th>
                        <th>Data cadastro</th>
                        <th>Data atualização</th>
                        <th>Valido</th>
                        <th className="text-center">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.standards.map((standard, index) => (
                        <tr key={standard.id}>
                          <td>{index + 1}</td>
                          <td>
                            <a href={standard.file} target="_blank">
                              Link
                            </a>
                          </td>
                          <td>{standard.title}</td>
                          <td>{standard.language}</td>
                          <td>{standard.releaseDate}</td>
                          <td>{standard.validStartDate}</td>
                          <td>{standard.createdDate}</td>
                          <td>{standard.updatedDate}</td>
                          <td>{standard.valid ? "Sim" : "Não"}</td>
                          <td className="text-center">
                            <Link className="btn btn-info" to={{ pathname: 'edit-standard', search: '?id=' + standard.id }}>Visualizar</Link>
                            <a href="#myModal" className="btn btn-danger trigger-btn" data-toggle="modal">Excluir</a>

                            <div id="myModal" className="modal fade">
                                <div className="modal-dialog modal-confirm">
                                    <div className="modal-content"> 
                                        <div className="modal-header flex-column">
                                            <h4 className="modal-title w-100">Você tem certeza?</h4>	
                                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Você tem certeza que deseja excluir esse registro?</p>
                                        </div>
                                        <div className="modal-footer justify-content-center">
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button value={standard.id} onClick={this.handleClickDelete} type="button" className="btn btn-danger" data-dismiss="modal">Excluir</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
