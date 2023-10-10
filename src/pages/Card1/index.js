import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Card1() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>RPG</Text>
          <Text style={styles.textoCabecalho}>sua coleção</Text>
        </View>
        <Text style={styles.titulo}>- Poção do Amor -</Text>
        <Image style={styles.image} source={require('../../../assets/item1.jpg')}></Image>
        <Text style={styles.desc}>Essa é uma poção direto do livro de Merlin que é capaz de fazer qualquer mortal ou criatura criar uma forte atração por aquele que a possuí. Efeito de devoção: faz com que o atingido seja recrutado para o seu lado.</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>TROCAR</Text>
        </TouchableOpacity>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}
