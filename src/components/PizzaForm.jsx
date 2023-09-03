import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap

class PizzaForm extends Component {
  state = {
    customerName: '',
    pizzaSize: 'Personal',
    extraIngredients: 0,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { customerName, pizzaSize, extraIngredients } = this.state;

    // Validación mínima: Asegurarse de que el cliente haya ingresado un nombre.
    if (!customerName) {
      alert('Por favor, ingrese su nombre.');
      return;
    }

    // Enviar la información al componente padre
    this.props.onSubmit(customerName, pizzaSize, parseInt(extraIngredients, 10));
  };

  render() {
    const { customerName, pizzaSize, extraIngredients } = this.state;
    return (
      <div className="container mt-4">
        <h2>Ingrese los detalles de su pizza</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Nombre del Cliente:</label>
            <input
              type="text"
              className="form-control"
              id="customerName"
              name="customerName"
              value={customerName}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="pizzaSize">Tamaño de la Pizza:</label>
            <select
              className="form-control"
              id="pizzaSize"
              name="pizzaSize"
              value={pizzaSize}
              onChange={this.handleInputChange}
            >
              <option value="Personal">Personal</option>
              <option value="Mediana">Mediana</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="extraIngredients">Ingredientes Adicionales:</label>
            <input
              type="number"
              className="form-control"
              id="extraIngredients"
              name="extraIngredients"
              value={extraIngredients}
              onChange={this.handleInputChange}
              min="0"
            />
          </div><br />
          <button type="submit" className="btn btn-primary">Calcular Costo</button>
        </form>
      </div>
    );
  }
}

export default PizzaForm;
