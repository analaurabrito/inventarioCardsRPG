import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Card2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cabecalho}>
          <Text style={styles.textoCabecalho}>RPG</Text>
          <Text style={styles.textoCabecalho}>sua coleção</Text>
        </View>
        <Text style={styles.titulo}>- Papíro Wicca -</Text>
        <Image style={styles.image} source={require('../../../assets/item2.jpg')}></Image>
        <Text style={styles.desc}>Esse item contêm uma transcrição de magia Wicca de um poderoso coven naturalista. Efeito de cura: condecede ao portador a habilidade de restaurar seus pontos de força em menos rodadas.</Text>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>TROCAR</Text>
        </TouchableOpacity>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}
