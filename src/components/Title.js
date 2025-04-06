import { Text, StyleSheet } from 'reacte-native';

const Title = () => {
    return(
        <Text style={style.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottm: 24,
    },
});

export default Title;