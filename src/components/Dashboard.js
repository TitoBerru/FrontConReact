import React from 'react';
import TotalPacksVendidos from './TotalPacksVendidos';
import Usuarios from './Usuarios'
import TotalPesosVendidos from './TotalPesosVendidos';
import UltimoPackVendido from './UltimoPackVendido';
import avatar from './../assets/images/jsola.jpg';
import camion from './../assets/images/camion.jpg';




function Dashboard() {
    return (
        <div id="wrapper">

            {/* Sidebar */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* Sidebar - Brand */}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <i className="fas fa-chart-line"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Administrador</div>
                </a>

                {/* Divider */}
                <hr className="sidebar-divider my-0"/>

                {/* Nav Item - Dashboard */}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span></a>
                </li>

                 {/* Divider */}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading */}
                <div className="sidebar-heading">Actions</div>

                {/* Nav Item - Pages */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Paginas</span>
                    </a>
                </li>

                {/* Nav Item - Charts */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Datos</span></a>
                </li>

                {/* Nav Item - Tables */}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tablas</span></a>
                </li>

                {/* Divider */}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/* End of Sidebar */}

            {/*  Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* Main Content */}
                <div id="content">

                    {/* Topbar */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/* Sidebar Toggle (Topbar) */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        {/* Topbar Navbar */}
                        <ul className="navbar-nav ml-auto">

                            {/* Nav Item - Alerts */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/* Counter - Alerts */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </a>
                            </li>

                            {/* Nav Item - Messages */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    {/* Counter - Messages */}
                                    <span className="badge badge-danger badge-counter">7</span>
                                </a>
                            </li>

                            <div className="topbar-divider d-none d-sm-block"></div>

                            {/* Nav Item - User Information */}
                            <li className="nav-item dropdown no-arrow">
                                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Bienvenido!</span>
                                    <img className="img-profile rounded-circle" src={avatar} width="60" alt="dummy"/>
                                </a>
                            </li>

                        </ul>

                    </nav>
                    {/* End of Topbar */}

                    {/* Begin Page Content */}
                    <div className="container-fluid">

                        {/* Page Heading */}
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">YoTeMudo Dashboard</h1>
                        </div>

                        {/* Content Row */}
                        <div className="row">

                            {/* Amount of Products in DB */}
                            <div className="col-md-4 mb-4">
                                <div className="card border-left-primary shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Total de Packs Vendidos</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalPacksVendidos /></div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* $$$ of all products in DB */}
                            <div className="col-md-4 mb-4">
                                <div className="card border-left-success shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Valores Totales de Venta en $</div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800"><TotalPesosVendidos /></div>
                                            </div>
                                            <div className="col-auto">
                                                <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Amount of users in DB */}
                            <div className="col-md-4 mb-4">
                                <div className="card border-left-warning shadow h-100 py-2">
                                    <div className="card-body">
                                        <div className="row no-gutters align-items-center">
                                            <div className="col mr-2">
                                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de Usuarios Registrados
                                                </div>
                                                <div className="h5 mb-0 font-weight-bold text-gray-800"><Usuarios/></div>
                                            </div>
                                            
                                            <div className="col-auto">
                                                <i className="fas fa-user-check fa-2x text-gray-300"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                       {/* Content Row */}
                        <div className="row">
                            {/* Last Product in DB */}
                            <div className="col-lg-6 mb-4">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Ultimo Pack Vendido <UltimoPackVendido /></h6>
                                         Pack Nro 1
                                    </div>
                                    <div className="card-body">
                                        <div className="text-center">
                                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={camion} alt="dummy"/>
                                        </div>
                                        
                                        <p>Este fue el último producto Vendido</p>
                                        <a target="_blank" rel="nofollow" href="/"></a>
                                    </div>
                                </div>
                            </div>

                            {/* Categories in DB */}
                            <div className="col-lg-6 mb-4">						
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3">
                                        <h6 className="m-0 font-weight-bold text-primary">Cantidad de Packs en la Base de Datos</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Pack Nro 1
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Pack Nro 2
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Pack Nro 3
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Pack Nro 4
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Category 05
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <div className="card bg-info text-white shadow">
                                                    <div className="card-body">
                                                        Category 06
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/* /.container-fluid */}
                </div>
               {/* End of Main Content */}

                {/* Footer */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Dashboard 2020</span>
                        </div>
                    </div>
                </footer>
                {/* End of Footer */}

            </div>
           {/* End of Content Wrapper */}

	</div>
	

    );
}


export default Dashboard;
