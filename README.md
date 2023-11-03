# Arquitectura_Programacion_Sistemas_Internet_P2
# API de Tienda

Esta API proporciona endpoints para manejar productos, clientes y facturas en una tienda.

## Endpoints

### Productos

#### Crear Producto (POST)

Este endpoint permite crear productos para la tienda con los siguientes datos:

- `name`: Obligatorio
- `stock`: Opcional (si no se indica, tendrá 0 elementos)
- `description`: Opcional
- `price`: Obligatorio

Ruta: `/products`

#### Obtener Todos los Productos (GET)

Este endpoint devuelve todos los productos disponibles.

Ruta: `/products`

#### Eliminar Producto (DELETE)

Este endpoint permite eliminar un producto.
Se debe proporcionar el id correspondiente a mongo.
Ejemplo de id de mongo de un producto (653ef3861d52b64970b66faa).

Ruta: `/products/:id`

### Clientes

#### Crear Cliente (POST)

Este endpoint permite crear clientes para la tienda con los siguientes datos:

- `name`: Obligatorio
- `cif`: Obligatorio

Ruta: `/client`

#### Obtener Todos los Clientes (GET)

Este endpoint devuelve todos los clientes registrados.

Ruta: `/client`

#### Eliminar Cliente (DELETE)

Este endpoint permite eliminar un cliente.
Se debe proporcionar el cif correspondiente al cliente

Ruta: `/client/:id`

### Facturas

#### Crear Factura (POST)

Este endpoint permite crear facturas a clientes con los siguientes datos:
Ejemplo de id de mongo de un cliente (653ef2f31d52b64970b66f9d).

- `client`: Obligatorio (id de mongo del cliente)
- `products`: Obligatorio (array de productos, debe introducirse productos existenes en la base de datos, por ejemplo, ["Miel","Lasaña"]).
- `total`: Importe total de la factura

Ruta: `/invoice`

#### Obtener Factura (GET)

Este endpoint devuelve la factura correspondiente al ID proporcionado.
Se debe proporcionar el id correspondiente a mongo.
Ejemplo de id de mongo de una factura (653ef757a8e1c5c32c0c1e72).

Ruta: `/invoice/:id`
