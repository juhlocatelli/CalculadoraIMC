import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Classification from './Classification';

const Result = ({ imc }) => {
    return (
        <View>
            <Text style={styles.result}>Seu IMC é: {imc}</Text>//exibe a mensagem 
            <Classification imc={imc} />//classification recebe o qu7e etsa guardado em imc
        </View>
    );
};
//ESTILIZAÇÃO
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: 'center',
        color: '#ff66ff',
    },
   Classification: {
    color: 'ff66ff',
    textAlign: 'center',
   },
});

export default Result;