
import { View, Text, StyleSheet } from 'react-native';

export default function TarjetaProducto({ producto, ofertas }) {
  const precioMinimo = ofertas.length > 0
    ? Math.min(...ofertas.map((oferta) => oferta.precio))
    : null;
  const precioMaximo = ofertas.length > 0
    ? Math.max(...ofertas.map((oferta) => oferta.precio))
    : null;
  const ahorroPotencial = ofertas.length > 0
    ? precioMaximo - precioMinimo
    : null;
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{producto.nombre}</Text>

      <Text style={styles.categoria}>
        Categoría: {producto.categoria}
      </Text>
      {ofertas.length > 0 && (
        <Text style={styles.ahorro}>
          {ofertas.length === 1
            ? 'Solo hay un comercio con precio registrado.'
            : ahorroPotencial === 0
              ? 'Todos los comercios tienen el mismo precio.'
              : `Podes ahorrar $${ahorroPotencial} comparando comercios!`}
        </Text>
      )}
      {ofertas.length > 0 ? (
        ofertas.map((oferta) => {
          const esMasBarato = oferta.precio === precioMinimo;

          return (   
               <View key={oferta.id} style={styles.oferta}>
               <View style={styles.infoComercio}>
               <Text style={styles.comercio}>
               {oferta.nombreComercio}
               </Text>
               <Text style={styles.direccion}>
               {oferta.direccionComercio}
               </Text>
               </View>
               <Text
              style={[
              styles.precio,
              esMasBarato && styles.precioMinimo,
              ]}>
              ${oferta.precio}
              {esMasBarato ? ' - Mejor precio' : ''}
              </Text>
             </View>
            );
           })
         ) : (
        <Text style={styles.sinOfertas}>
          Todavía no hay precios registrados.
        </Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: '#242C20',
    padding: 16,
    borderRadius: 16,
    marginBottom: 14,
    width: 320,
    borderWidth: 1,
    borderColor: '#394532',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E9EDE5',
    marginBottom: 6,
  },
  categoria: {
    fontSize: 14,
    color: '#B8C2B1',
    marginBottom: 12,
  },
  oferta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 10,
    gap: 8,
  },
  comercio: {
    color: '#E9EDE5',
    flex: 1,
    fontSize: 14,
  },
  precio: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#D0D8C9',
  },
  precioMinimo: {
    color: '#AEC926',
  },
  sinOfertas: {
    color: '#C6CEC2',
    marginTop: 8,
  },
  ahorro: {
    color: '#AEC926',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  infoComercio: {
  flex: 1,
  },

  direccion: {
  color: '#B8C2B1',
  fontSize: 12,
  marginTop: 3,
},
});
