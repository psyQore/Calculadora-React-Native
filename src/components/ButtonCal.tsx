import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
}

const ButtonCal = ({text, color = '#2D2D2D'}: Props) => {
  // Css
  const {button, buttonText} = styles;

  return (
    <View
      style={{
        ...button,
        backgroundColor: color,
      }}>
      <Text style={buttonText}>{text}</Text>
    </View>
  );
};

export default ButtonCal;
