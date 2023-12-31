//app que llama a componente 
import React from 'react';

//vinculo con el componente Producto.js
import Producto from './components/Producto';

// constante

const ProductoPagina = () => {
  const productData = {
    nombre: 'Nombre del producto',
    descripcion: 'Descripción del producto',
    precio: 10,
    sku: 'SKU123',
    availableQuantity: 50,
  };

  return (
    <div>
      <h1>PÁGINA DEL PRODUCTO</h1>
      <Producto
        nombre={productData.nombre}
        descripcion={productData.descripcion}
        precio={productData.precio}
        sku={productData.sku}
        availableQuantity={productData.availableQuantity}
      />
    </div>
  );
}

export default ProductoPagina;


