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

    async componentDidMount() {
        let consultancies = await getConsultancies();
        consultancies = consultancies ? consultancies : [];
        this.setState({consultancies});
    }

    handleClickDelete = async event => {
        const consultancyId = event.target.value;
        const deleted = await deleteConsultancy(consultancyId);
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
                                            <th>Indíce</th>
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
                                                        <Link className="btn btn-info" to={{ pathname: 'edit-consultancy', search: '?id=' + consultancy.id }}>Visualizar</Link>
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
                                                                        <button value={consultancy.id} onClick={this.handleClickDelete} type="button" className="btn btn-danger" data-dismiss="modal">Excluir</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>

                
            </div>
        );
    }
}
