import { StyleSheet, Text, View } from 'react-native';


export default function Encabezado() {
    return (
        <View>
            <Text style={styles.titulo}>Comparador de Precios</Text>
            <Text style={styles.subtitulo}>Compará antes de comprar</Text>
        </View>
    );
}


const styles = StyleSheet.create({
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#AEC926',
    marginBottom: 8,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#B8C2B1',
    textAlign: 'center',
    marginBottom: 24,
  },
});
