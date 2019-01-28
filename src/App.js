import React, { Component } from 'react';
import './App.css';
// Importamos el componente de react router, siempre link necesita de router para que el app sea capaz de activar el router en todos los componentes;
import { Link, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/customers">Customers</Link>
        </div>
      </Router>
    );
  }
}

export default App;
