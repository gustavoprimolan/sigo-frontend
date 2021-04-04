import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Footer from '../elements/footer';
import { getConsultancies, deleteConsultancy } from '../api/consultancy-api';
import { consultancySituation } from '../utils/consutancy-situation';

export default class Consultancy extends Component {
    state = {
        consultancies: [],
        toDashboard: false,
        isLoading: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const consultancies = getConsultancies();
        this.setState({consultancies});
    }

    handleClickDelete = event => {
        const consultancyId = event.target.value;
        const deleted = deleteConsultancy(consultancyId);
        if(deleted) {
            this.componentDidMount();
            this.setState({ isLoading: true});
        }
    };

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Consultorias e Assessorias</li>
                                <li className="ml-auto"><Link to={'add-consultancy'}>Adicionar</Link></li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Consultorias e Assessorias
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Departamento</th>
                                            <th>Setor</th>
                                            <th>Consultoria</th>
                                            <th>Data contratação</th>
                                            <th>Data de início</th>
                                            <th>Data de término</th>
                                            <th>Situação</th>
                                            <th>Ativa</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.consultancies.map((consultancy , index)=>
                                                <tr key={consultancy.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{consultancy.department}</td>
                                                    <td>{consultancy.sector}</td>
                                                    <td>{consultancy.company}</td>
                                                    <td>{consultancy.hiringDate}</td>
                                                    <td>{consultancy.startDate}</td>
                                                    <td>{consultancy.endDate}</td>
                                                    <td>{consultancySituation(consultancy.situation)}</td>
                                                    <td>{consultancy.active ? 'Sim' : 'Não'}</td>
                                                    <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'edit-consultancy', search: '?id=' + consultancy.id }}>Visualizar</Link>
                                                        &nbsp; | &nbsp;
                                                        <button value={consultancy.id} className="btn btn-sm btn-danger" onClick={this.handleClickDelete} >Delete</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}
