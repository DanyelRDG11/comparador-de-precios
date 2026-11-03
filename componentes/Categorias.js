import { StyleSheet, Text, View, Pressable } from 'react-native';

const categorias = [
  'Todos',
  'Alimentos',
  'Bebidas',
  'Limpieza',
  'Higiene',
];

export default function Categorias({
  categoriaSeleccionada,
  setCategoriaSeleccionada,
}) {
  return (
    <View style={styles.contenedor}>
      {categorias.map((categoria) => {
        const seleccionada =
          categoriaSeleccionada === categoria;

        return (
          <Pressable
            key={categoria}
            style={[
              styles.categoria,
              seleccionada && styles.categoriaSeleccionada,
            ]}
            onPress={() => setCategoriaSeleccionada(categoria)}
          >
            <Text
              style={[
                styles.texto,
                seleccionada && styles.textoSeleccionado,
              ]}
            >
              {categoria}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  categoria: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: '#242C20',
    borderWidth: 1,
    borderColor: '#394532',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriaSeleccionada: {
    backgroundColor: '#AEC926',
    borderColor: '#AEC926',
  },
  texto: {
    color: '#E9EDE5',
    fontSize: 14,
    fontWeight: '500',
  },
  textoSeleccionado: {
    color: '#141914',
  },
});