import React from 'react';
import './Producto.css';

//availableQuantity es cantidad disponible del producto
const Producto = ({ nombre, descripcion, precio, sku, availableQuantity }) => {
  return (
    <div className="producto">
      <h2>{nombre}</h2>
      <p><strong>Descripción:</strong> {descripcion}</p>
      <p><strong>Precio:</strong> ${precio}</p>
      <p><strong>SKU:</strong> {sku}</p>
      <p><strong>Cantidad disponible:</strong> {availableQuantity}</p>
    </div>
  );
}

export default Producto;




