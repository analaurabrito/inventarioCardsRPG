import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
    },

    card: {
        height: '80%',
        width: '80%',
        border: '15px', 
        backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        paddingBottom: '20px',
    },

    cabecalho: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: '0px',
        marginBottom: '30px',
    },

    textoCabecalho: {
        fontSize: '8px',
        fontWeight: 'bold',
    },

    titulo:{
        fontSize: '20px',
        fontWeight: 'bold',
        letterSpacing: '1px',
    },

    image: {
        width: '90%',
        height: '50%',
        margin: '10px',
        borderRadius: '10px',
    },

    desc: {
        width: '85%',
        textAlign: 'justify',
    },

    botao: {
        backgroundColor: '#EFB810',
        width: '90%',
        height: '45px',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '7px',
        fontSize: '18px',
        margin: '10px',
    },

    textoBotao: {
        fontWeight: 'bold',
        color: 'black',
        letterSpacing: '1px',
    },
  });

export default styles;

