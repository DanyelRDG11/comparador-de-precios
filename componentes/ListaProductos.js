
import { View, Text, FlatList } from 'react-native';

import productos from '../datos/productos';
import precios from '../datos/precios';
import comercios from '../datos/comercios';

import TarjetaProducto from './TarjetaProducto';

export default function ListaProductos({
  texto,
  categoriaSeleccionada,
}) {
  const productosFiltrados = productos.filter((producto) => {
    const coincideTexto = producto.nombre
      .toLowerCase()
      .includes(texto.toLowerCase());

    const coincideCategoria =
      categoriaSeleccionada === 'Todos' ||
      producto.categoria === categoriaSeleccionada;

    return coincideTexto && coincideCategoria;
  });

  const obtenerOfertas = (productoId) => {
    return precios
      .filter((oferta) => oferta.productoId === productoId)
      .map((oferta) => {
        const comercio = comercios.find(
          (comercio) => comercio.id === oferta.comercioId
        );

        return {
            ...oferta,
            nombreComercio: comercio
              ? comercio.nombre
              : 'Comercio desconocido',
            direccionComercio: comercio
              ? comercio.direccion
              : 'Ubicación no disponible',
        };
      });
  };

  return (
    <View style={{ flex: 1, width: '100%' }}>
      <FlatList
        data={productosFiltrados}
        keyExtractor={(producto) => producto.id.toString()}
        renderItem={({ item }) => (
          <TarjetaProducto
            producto={item}
            ofertas={obtenerOfertas(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', marginTop: 20 }}>
            No se encontraron productos.
          </Text>
        }
        contentContainerStyle={{
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingBottom: 30,
        }}
      />
    </View>
  );
}