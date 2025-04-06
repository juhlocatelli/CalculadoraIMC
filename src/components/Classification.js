import React from 'react';
import Result from './Result';

function classificarIMC(imc) {
    if(imc < 18.5){
        return "Você está abaixo do peso";
    }
    else if (imc < 25) {
        return "Você está com o peso ideal";
    }
    else if (imc < 30) {
        return "Você está com sobrepeso";
    }
    else if (imc < 35){
        return "Você está com obesidade grau 1";
    }
    else if (imc < 40){
        return "Você está com obesidade grau 2";
    }
    else{
        return "Você está com obesidade grau 3";
    }
}
