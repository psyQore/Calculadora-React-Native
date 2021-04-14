import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ButtonCal from '../components/ButtonCal';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');

  const clean = () => {
    setNumber('0');
  };

  const buildNumber = (numberText: string) => {
    // Validacion: No aceptar doble punto
    if (number.includes('.') && numberText === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (numberText === '.') {
        setNumber(number + numberText);

        // Evaluar si es otro cero, y hay un punto
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);

        // Evitar el 000.00
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>{previousNumber}</Text>
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCal text="C" color="#9B9B9B" action={clean} />
        <ButtonCal text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCal text="del" color="#9B9B9B" action={clean} />
        <ButtonCal text="/" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="7" action={buildNumber} />
        <ButtonCal text="8" action={buildNumber} />
        <ButtonCal text="9" action={buildNumber} />
        <ButtonCal text="X" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="4" action={buildNumber} />
        <ButtonCal text="5" action={buildNumber} />
        <ButtonCal text="6" action={buildNumber} />
        <ButtonCal text="-" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="1" action={buildNumber} />
        <ButtonCal text="2" action={buildNumber} />
        <ButtonCal text="3" action={buildNumber} />
        <ButtonCal text="+" color="#FF9427" action={clean} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="0" ancho action={buildNumber} />
        <ButtonCal text="." action={buildNumber} />
        <ButtonCal text="=" color="#FF9427" action={clean} />
      </View>
    </View>
  );
};

{
  /* #2D2D2D Gris Oscuro */
}
{
  /* #FF9427 Naranjo */
}
