import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';

import Encabezado from './componentes/Encabezado';
import Buscador from './componentes/Buscador';
import Categorias from './componentes/Categorias';
import ListaProductos from './componentes/ListaProductos';

export default function App() {
  const [texto, setTexto] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] =
    useState('Todos');

  return (
    <View style={styles.container}>
      <Encabezado />

      <Buscador
        texto={texto}
        setTexto={setTexto}
      />

      <Categorias
        categoriaSeleccionada={categoriaSeleccionada}
        setCategoriaSeleccionada={setCategoriaSeleccionada}
      />

      <ListaProductos
        texto={texto}
        categoriaSeleccionada={categoriaSeleccionada}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#141914',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
});