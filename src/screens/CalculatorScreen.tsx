import React, {useState, useRef} from 'react';
import {Text, View} from 'react-native';
import ButtonCal from '../components/ButtonCal';
import {useCalculator} from '../hooks/useCalculator';

import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  const {
    previousNumber,
    number,
    clean,
    positiveNegative,
    btnDelete,
    btnDivide,
    buildNumber,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.resultSmall}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>

      <View style={styles.row}>
        <ButtonCal text="C" color="#9B9B9B" action={clean} />
        <ButtonCal text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCal text="del" color="#9B9B9B" action={btnDelete} />
        <ButtonCal text="/" color="#FF9427" action={btnDivide} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="7" action={buildNumber} />
        <ButtonCal text="8" action={buildNumber} />
        <ButtonCal text="9" action={buildNumber} />
        <ButtonCal text="x" color="#FF9427" action={btnMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="4" action={buildNumber} />
        <ButtonCal text="5" action={buildNumber} />
        <ButtonCal text="6" action={buildNumber} />
        <ButtonCal text="-" color="#FF9427" action={btnSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="1" action={buildNumber} />
        <ButtonCal text="2" action={buildNumber} />
        <ButtonCal text="3" action={buildNumber} />
        <ButtonCal text="+" color="#FF9427" action={btnAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCal text="0" ancho action={buildNumber} />
        <ButtonCal text="." action={buildNumber} />
        <ButtonCal text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
