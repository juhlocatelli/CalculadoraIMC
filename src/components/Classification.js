import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Classification = ({ imc }) => {
    const valorIMC = parseFloat(imc);

    function classificarIMC(valorIMC) {//Estrutura condicional que verifica em qual condição o usuário se enquadra
        if(valorIMC < 18.5){
            return {texto: "Você está abaixo do peso", cor:"#ff66ff"};
        }
        else if (valorIMC < 25) {
            return {texto: "Você está com o peso ideal", cor:"#ff66ff"};
        }
        else if (valorIMC < 30) {
            return {texto: "Você está com sobrepeso", cor:"#ff66ff"};
        }
        else if (valorIMC < 35){
            return {texto: "Você está com obesidade grau 1", cor:"#ff66ff"};
        }
        else if (valorIMC < 40){
            return {texto: "Você está com obesidade grau 2", cor:"#ff66ff"};
        }
        else{
            return {texto: "Você está com obesidade grau 3"};
        }
    }    

    const classificacao = classificarIMC(valorIMC);//classificação está recebendo a função classificarIMC que tem como parâmetro o valor do imc

    return (
        <View style={styles.container}>//cuida da cor do componente classid=ficação
            <Text style={styles.texto}>
                Classificação: {classificacao.texto}
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
        textAlign: 'center',
        backgroundColor: '#ff66ff',
    },
    texto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Classification;


