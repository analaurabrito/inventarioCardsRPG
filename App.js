import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card1 from './src/pages/Card1';
import Card2 from './src/pages/Card2';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>SEUS CARDS:</Text>
        <Text style={styles.texto}>Cheque seu inventário disponível para troca.</Text>
      </View>
      <Card1 style={styles.cards}></Card1>
      <Card2 style={styles.cards}></Card2>
      <Text style={styles.rodape}>Desenvolvido por @AnaLaura</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '50px',
  },

  titulo: {
    fontSize: '25px',
    marginBottom: '0px',
    color: 'beige',
    fontWeight: 'bold',
  },

  texto: {
    width: '100%',
    textAlign: 'justify',
    color: 'beige',
  },

  cards: {
    width: '100%',
    height: '100%',
    padding: '20px',
  },

  rodape: {
    padding: '10px',
  },
});
