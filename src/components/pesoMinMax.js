import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PesoMinMax = ({ altura }) => {
    const alturaMetros = parseFloat(altura) / 100;//conversão de cm para m
    
    const pesoMin = (18.5 * (alturaMetros ** 2)).toFixed(1);//declaração de variáveis
    const pesoMax = (24.9 * (alturaMetros ** 2)).toFixed(1);//declaração de variáveis

    return (// o que aparecerá na tela
        <View style={styles.container}>
            <Text style={styles.texto}>
                Peso ideal mínimo: {pesoMin} kg{"\n"}
                Peso ideal máximo: {pesoMax} kg
            </Text>
        </View>
    );
};
//ESTILIZAÇÃO
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#ff66ff',
    },
    texto: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
});

export default PesoMinMax;