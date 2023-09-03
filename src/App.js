import React, { Component } from 'react';
import PizzaForm from './components/PizzaForm';
import PizzaSummary from './components/PizzaSummary';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {
    customerName: '',
    pizzaSize: 'Personal',
    extraIngredients: 0,
    pizzaCost: 0.0, // Inicializamos el costo en 0
  };

  handleFormSubmit = (customerName, pizzaSize, extraIngredients) => {
    // Calcular el costo de la pizza según el tamaño
    let pizzaCost = 0.0;
    switch (pizzaSize) {
      case 'Personal':
        pizzaCost = 7.0;
        break;
      case 'Mediana':
        pizzaCost = 10.0;
        break;
      case 'Grande':
        pizzaCost = 12.0;
        break;
      default:
        pizzaCost = 7.0; // Por defecto, si no se selecciona un tamaño válido, se asume Personal.
    }

    

    // Actualizar el estado con los detalles de la pizza y el costo total
    this.setState({
      customerName,
      pizzaSize,
      extraIngredients,
      pizzaCost,
    });
  };

  render() {
    const { customerName, pizzaSize, extraIngredients, pizzaCost } = this.state;
    return (
      <div className="App">
        <Navigation />
        <PizzaForm onSubmit={this.handleFormSubmit} />
        <PizzaSummary
          customerName={customerName}
          pizzaSize={pizzaSize}
          extraIngredients={extraIngredients}
          pizzaCost={pizzaCost}
        />
      </div>
    );
  }
}

export default App;
