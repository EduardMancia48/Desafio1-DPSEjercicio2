import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzaSummary = ({ customerName, pizzaSize, extraIngredients, pizzaCost }) => {
  // Calcular el costo de ingredientes adicionales según las nuevas condiciones
  let ingredientsCost = 0;

  if (pizzaSize === 'Mediana') {
    if (extraIngredients === 1) {
      ingredientsCost = 2.0;
    } else if (extraIngredients === 2) {
      ingredientsCost = 1.0 * 2;
    } else if (extraIngredients === 3) {
      ingredientsCost = 0.75 * 3;
    } else if (extraIngredients > 3) {
      ingredientsCost = 0.5 * extraIngredients;
    }
  } else if (pizzaSize === 'Grande') {
    if (extraIngredients === 1) {
      ingredientsCost = 2.5;
    } else if (extraIngredients === 2) {
      ingredientsCost = 2.0 * 2;
    } else if (extraIngredients === 3) {
      ingredientsCost = 1.0 * 3;
    } else if (extraIngredients > 3) {
      ingredientsCost = 0.75 * extraIngredients;
    }
  } else {
    // Para pizzas personales
    if (extraIngredients === 1) {
      ingredientsCost = 1.0;
    } else if (extraIngredients === 2) {
      ingredientsCost = 0.75 * 2;
    } else if (extraIngredients === 3) {
      ingredientsCost = 0.5 * 3;
    } else if (extraIngredients > 3) {
      ingredientsCost = 0.25 * extraIngredients;
    }
  }

  // Calcular el costo total
  const totalCost = pizzaCost + ingredientsCost;

  return (
    <div className="container mt-4">
      <h2>Resumen de la factura</h2>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Nombre del cliente:</strong> {customerName}</p>
          <p><strong>Tamaño de la pizza:</strong> {pizzaSize}</p>
          <p><strong>Ingredientes adicionales:</strong> {extraIngredients}</p>
        </div>
        <div className="col-md-6">
          <p><strong>Costo de la pizza:</strong> ${pizzaCost.toFixed(2)}</p>
          <p><strong>Costo de ingredientes adicionales:</strong> ${ingredientsCost.toFixed(2)}</p>
          <p><strong>Total a pagar:</strong> ${totalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaSummary;
