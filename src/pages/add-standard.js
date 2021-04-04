import React, { Component } from "react";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import { postConsultancy } from "../api/consultancy-api";
import Footer from "../elements/footer";
import { postStandard } from "../api/standard-api";

export default class AddStandard extends Component {
  state = {
    redirect: false,
    toDashboard: false,
    isLoading: false,
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });
    const file = document.getElementById("inputFile").value;
    const code = document.getElementById("inputCode").value;
    const organization = document.getElementById("inputOrganization").value;
    const title = document.getElementById("inputTitle").value;
    const type = document.getElementById("inputType").value;
    const language = document.getElementById("inputLanguage").value;
    const releaseDate = document.getElementById("inputReleaseDate").value;
    const validStartDate = document.getElementById("inputValidStartDate").value;
    const description = document.getElementById("inputDescription").value;

    const standard = {
      file,
      code,
      organization,
      title,
      type,
      language,
      releaseDate,
      validStartDate,
      description,
    };

    const created = postStandard(standard);
    if (created) {
      this.setState({ redirect: true, isLoading: false });
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/standard" />;
    }
  };

  render() {
    const isLoading = this.state.isLoading;
    if (this.state.toDashboard === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Header />
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper">
            <div className="container-fluid">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={"/consultancy"}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">
                  Adicionar Consultoria
                </li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header">Adicionar Consultoria</div>
                <div className="card-body">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputFile"
                              className="form-control"
                              placeholder="Entre com o link da norma"
                              autoFocus="autofocus"
                            />
                            <label htmlFor="inputFile">Link da Norma</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputCode"
                              className="form-control"
                              placeholder="Entre com o código da norma"
                              required="required"
                            />
                            <label htmlFor="inputCode">Código da Norma</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputOrganization"
                              className="form-control"
                              placeholder="Entre com a organização"
                              required="required"
                            />
                            <label htmlFor="inputOrganization">
                              Organização da Norma
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputTitle"
                              className="form-control"
                              placeholder="Título"
                              required="required"
                            />
                            <label htmlFor="inputTitle">Título</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputType"
                              className="form-control"
                              placeholder="Entra com o tipo da norma"
                              required="required"
                            />
                            <label htmlFor="inputType">Tipo da Norma</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputLanguage"
                              className="form-control"
                              placeholder="Entre com o idioma"
                              required="required"
                            />
                            <label htmlFor="inputLanguage">Idioma</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputReleaseDate"
                              className="form-control"
                              placeholder="Entre com a data de publicação"
                              required="required"
                            />
                            <label htmlFor="inputReleaseDate">
                              Data de Pubilicação
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputValidStartDate"
                              className="form-control"
                              placeholder="Entre a data de início de validade"
                              required="required"
                            />
                            <label htmlFor="inputValidStartDate">
                              Data de Início de Validade
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="inputDescription">Descrição</label>
                            <textarea
                              id="inputDescription"
                              className="form-control"
                              placeholder="Entre com uma breve descrição da norma"
                              required="required"
                              rows="3"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled={this.state.isLoading ? true : false}
                    >
                      Adicionar Norma &nbsp;&nbsp;&nbsp;
                      {isLoading ? (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                      ) : (
                        <span></span>
                      )}
                    </button>
                  </form>
                  {this.renderRedirect()}
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
