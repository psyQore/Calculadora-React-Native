import React from 'react';
import {Text, View} from 'react-native';
import ButtonCal from '../components/ButtonCal';
import {styles} from '../theme/appTheme';

export const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultSmall}>1,500.00</Text>
      <Text style={styles.result}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCal text="C" color="#9B9B9B" />
        <ButtonCal text="+/-" color="#9B9B9B" />
        <ButtonCal text="del" color="#9B9B9B" />
        <ButtonCal text="/" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCal text="7" />
        <ButtonCal text="8" />
        <ButtonCal text="9" />
        <ButtonCal text="X" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCal text="4" />
        <ButtonCal text="5" />
        <ButtonCal text="6" />
        <ButtonCal text="-" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCal text="1" />
        <ButtonCal text="2" />
        <ButtonCal text="3" />
        <ButtonCal text="+" color="#FF9427" />
      </View>
      <View style={styles.row}>
        <ButtonCal text="0" ancho />
        <ButtonCal text="." />
        <ButtonCal text="=" color="#FF9427" />
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
