import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  ancho?: boolean;
  action: (numberText: string) => void;
}

const ButtonCal = ({text, color = '#2D2D2D', ancho = false, action}: Props) => {
  // Css
  const {button, buttonText} = styles;

  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...button,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...buttonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonCal;
