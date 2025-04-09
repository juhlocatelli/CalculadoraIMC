import { Text, StyleSheet } from 'react-native';

const Title = () => {
    return(
        <Text style={styles.title}>Calculadora de IMC</Text>//título do app
    );
};
//ESTILIZAÇÃO
const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
        color: '#ff66ff',
    },
});

export default Title;