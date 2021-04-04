import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Footer from '../elements/footer';
import { consultancySituation } from '../utils/consutancy-situation';
import { getStandards, deleteStandard } from '../api/standard-api';

export default class Standard extends Component {
    state = {
        standards: [],
        toDashboard: false,
        isLoading: false
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const standards = getStandards();
        this.setState({standards});
        console.log(standards);
    }

    handleClickDelete = event => {
        const consultancyId = event.target.value;
        const deleted = deleteStandard(consultancyId);
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
                                <li className="breadcrumb-item active">Gestão de Normas</li>
                                <li className="ml-auto"><Link to={'add-standard'}>Adicionar Norma</Link></li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
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
                                            {this.state.standards.map((standard , index)=>
                                                <tr key={standard.id}>
                                                    <td>{index + 1}</td>
                                                    <td><a href={standard.file} target='_blank'>Link</a></td>
                                                    <td>{standard.title}</td>
                                                    <td>{standard.language}</td>
                                                    <td>{standard.releaseDate}</td>
                                                    <td>{standard.validStartDate}</td>
                                                    <td>{standard.createdDate}</td>
                                                    <td>{standard.updatedDate}</td>
                                                    <td>{standard.valid ? 'Sim' : 'Não'}</td>
                                                    <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'edit-standard', search: '?id=' + standard.id }}>Visualizar</Link>
                                                        &nbsp; | &nbsp;
                                                        <button value={standard.id} className="btn btn-sm btn-danger" onClick={this.handleClickDelete} >Excluir</button>
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
