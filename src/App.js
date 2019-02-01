import React, { Component } from 'react';
import './App.css';
// Importamos el componente de react router, siempre link necesita de router para que el app sea capaz de activar el router en todos los componentes;
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeContainer from './container/HomeContainer';
import CustomersContainer from './container/CustomersContainer';

// Route: componente usado para definir los paths y contenido de la aplicacion de React, con exact dejamos obligatorio esa ruta
// Link: Para hacer anclas de navegacion con react router
// Switch: Encuantra coincidencias de los paths y los genera de forma separada

class App extends Component {

  // Componente que muestra el  Home
  renderHome = () => <HomeContainer />

  // Componente datos del cliente
  renderCustomerContainer = () => <h1>Show one Customer</h1>

  // Componente lista de clientes
  renderCustomerListContainer = () => <CustomersContainer />

  // Nuevo cliente
  renderCustomerNewContainer = () => <h1>New Customer</h1>


// Siempre poner las rutas + especificas de primera en el Switch
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" render={this.renderHome}></Route>
            <Route exact path="/customers" render={this.renderCustomerListContainer}></Route>
            <Switch>
                <Route path="/customers/new" render={this.renderCustomerNewContainer}></Route>
                <Route path="/customers/:dni" render={this.renderCustomerContainer}></Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
