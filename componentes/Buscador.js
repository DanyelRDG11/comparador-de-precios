import { StyleSheet, View, TextInput } from 'react-native';



export default function Buscador({ texto, setTexto }) {
   
    return (
        <View>
            <TextInput placeholder="Buscar producto..."
            value={texto} 
            style={styles.buscador}
            onChangeText={setTexto}/>
            
        </View>
    );
}


const styles = StyleSheet.create({
  buscador: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  }

});