import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import { getConsultancies, putConsultancy } from "../api/consultancy-api";
import Footer from "../elements/footer";

export default class EditConsultancy extends Component {
  constructor(props) {
    super(props);
    // this.url = 'http://localhost:8080/consultancies';
    this.consultancy = {};
  }

  state = {
    id: "",
    redirect: false,
    isLoading: false,
  };

  componentDidMount() {
    const id = this.props.location.search[4];
    this.consultancy = getConsultancies()[id - 1];
    document.getElementById("inputDepartment").value = this.consultancy.department;
    document.getElementById("inputSector").value = this.consultancy.sector;
    document.getElementById("inputCompany").value = this.consultancy.company;
    document.getElementById("inputCnpj").value = this.consultancy.cnpj;
    document.getElementById("inputHiringDate").value = this.consultancy.hiringDate;
    document.getElementById("inputStartDate").value = this.consultancy.startDate;
    document.getElementById("inputEndDate").value = this.consultancy.endDate;
    document.getElementById("inputSituation").value = this.consultancy.situation;
    document.getElementById("inputActive").value = this.consultancy.active ? 'true' : 'false';

  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const department = document.getElementById("inputDepartment").value;
    const sector = document.getElementById("inputSector").value;
    const company = document.getElementById("inputCompany").value;
    const cnpj = document.getElementById("inputCnpj").value;
    const hiringDate = document.getElementById("inputHiringDate").value;
    const startDate = document.getElementById("inputStartDate").value;
    const endDate = document.getElementById("inputEndDate").value;
    const situation = document.getElementById("inputSituation").value;
    const active = document.getElementById("inputActive").value == 'true' ? true : false;
    
    this.consultancy = {...this.consultancy, department, sector, company, cnpj, hiringDate, startDate, endDate, situation, active};

    const updated = putConsultancy(this.consultancy);
    if (updated) {
      this.setState({ redirect: true, isLoading: false });
    }
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/consultancy" />;
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
                              id="inputDepartment"
                              className="form-control"
                              placeholder="Enter name"
                              required="required"
                              autoFocus="autofocus"
                            />
                            <label htmlFor="inputDepartment">
                              Departamento
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputSector"
                              className="form-control"
                              placeholder="Enter Sector"
                              required="required"
                            />
                            <label htmlFor="inputSector">Setor</label>
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
                              id="inputCompany"
                              className="form-control"
                              placeholder="Company name"
                              required="required"
                            />
                            <label htmlFor="inputCompany">
                              Empresa que executará a consultoria
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputCnpj"
                              className="form-control"
                              placeholder="Enter Cnpj"
                              required="required"
                            />
                            <label htmlFor="inputCnpj">CNPJ da Empresa</label>
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
                              id="inputHiringDate"
                              className="form-control"
                              placeholder="Enter Hiring Date"
                              required="required"
                            />
                            <label htmlFor="inputHiringDate">
                              Data de Contratação
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-label-group">
                            <input
                              type="text"
                              id="inputStartDate"
                              className="form-control"
                              placeholder="Enter Start Date"
                              required="required"
                            />
                            <label htmlFor="inputStartDate">
                              Data de Início
                            </label>
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
                              id="inputEndDate"
                              className="form-control"
                              placeholder="Enter End Date"
                              required="required"
                            />
                            <label htmlFor="inputEndDate">Data de Fim</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="inputSituation">Situação</label>
                            <select id="inputSituation" className="form-control">
                              <option value="IN_PROGRESS">Em Andamento</option>
                              <option value="FINISHED">Finalizada</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="inputActive">Ativa</label>
                            <select id="inputActive" className="form-control">
                              <option value="true">Sim</option>
                              <option value="false">Não</option>
                            </select>
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
