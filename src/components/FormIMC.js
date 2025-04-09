import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import PesoMinMax from './pesoMinMax';

const FormIMC = () => {// declaração de variáveis
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;//conversão de cm para m
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);//cálculo do imc
            setImc(imcCalculado);
        } 
    };

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"//informa a unidade de medida desejada
                keyboardType="numeric"//informa a unidade de medida desejada
                value={peso}//value recebe o que foi guardado em peso
                onChangeText={setPeso}//setta os novos valores do peso, conforme são digitados
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"//informa a unidade de medida desejada
                keyboardType="numeric"//informa a unidade de medida desejada
                value={altura}//value recebe o que foi guardado em altura
                onChangeText={setAltura}//setta os novos valores da altura, conforme são digitados
            />
            <Button title="Calcular IMC" onPress={calcularIMC} color="#ff66ff"/>
            {imc && <Result imc={imc} />}
            {imc && altura && <PesoMinMax altura={altura} />} 
        </View>
    );
};
//ESTILIZAÇÃO
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#f5f5f5',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: '#ff66ff',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color: '#ff66ff',
    },

});

export default FormIMC;