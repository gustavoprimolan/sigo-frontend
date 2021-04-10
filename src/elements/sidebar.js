import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  renderConsultancySidebar = () => {
    if (
      localStorage.getItem("permission") == "Administrador" ||
      localStorage.getItem("permission") == "Cliente"
    ) {
      return (
        <li className="nav-item">
          <Link to={"/consultancy"} className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>&nbsp;Consultorias</span>
          </Link>
        </li>
      );
    }
  };

  renderStandardSidebar = () => {
    if (localStorage.getItem("permission") == "Administrador") {
      return (
        <li className="nav-item">
          <Link to={"/standard"} className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>&nbsp;Gestão de Normas</span>
          </Link>
        </li>
      );
    }
  };

  render() {
    return (
      <div id="wrapper">
        <ul className="sidebar navbar-nav">
          <li className="nav-item active">
            <Link to={"/dashboard"} className="nav-link">
              <i className="fas fa-fw fa-tachometer-alt"></i>
              <span>&nbsp;Dashboard</span>
            </Link>
          </li>
          {this.renderConsultancySidebar()}
          {this.renderStandardSidebar()}
        </ul>
      </div>
    );
  }
}
