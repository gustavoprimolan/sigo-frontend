import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import Footer from "../elements/footer";
import { getStandard, getStandards, putStandard } from "../api/standard-api";

export default class EditStandard extends Component {
  constructor(props) {
    super(props);
    this.standard = {};
  }

  state = {
    id: "",
    redirect: false,
    isLoading: false,
  };

  async componentDidMount() {
    const id = this.props.location.search.split("=")[1];
    this.standard = await getStandard(id);
    console.log(this.standard)
    document.getElementById("inputFile").value = this.standard.file;
    document.getElementById("inputCode").value = this.standard.code;
    document.getElementById("inputOrganization").value = this.standard.organization;
    document.getElementById("inputTitle").value = this.standard.title;
    document.getElementById("inputType").value = this.standard.type;
    document.getElementById("inputLanguage").value = this.standard.language;
    document.getElementById("inputReleaseDate").value = this.standard.releaseDate;
    document.getElementById("inputValidStartDate").value = this.standard.validStartDate;
    document.getElementById("inputDescription").value = this.standard.description;
    document.getElementById("inputValid").value = this.standard.valid ? 'true' : 'false';
  }

  handleSubmit = async (event) => {
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
    const valid = document.getElementById("inputValid").value == 'true' ? true : false;

    this.standard = {
      ...this.standard,
      file,
      code,
      organization,
      title,
      type,
      language,
      releaseDate,
      validStartDate,
      description,
      valid
    };

    const updated = await putStandard(this.standard);
    if (updated) {
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
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">
                  Editar Consultorias e Assessorias
                </li>
              </ol>
            </div>
            <div className="container-fluid">
              <div className="card mx-auto">
                <div className="card-header">
                  Visualização da Consultoria e Assessoria
                </div>
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
                            <label htmlFor="inputValid">Valido</label>
                            <select id="inputValid" className="form-control">
                              <option value="true">Sim</option>
                              <option value="false">Não</option>
                            </select>
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
                      Editar Consultoria &nbsp;&nbsp;&nbsp;
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
