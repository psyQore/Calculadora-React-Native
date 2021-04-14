import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setPreviousNumber('0');
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

  const btnDelete = () => {
    let negative = '';
    let numberTemp = number;

    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumToPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumToPrevious();
    lastOperation.current = Operators.divide;
  };
  const btnMultiply = () => {
    changeNumToPrevious();
    lastOperation.current = Operators.multiply;
  };
  const btnSubtract = () => {
    changeNumToPrevious();
    lastOperation.current = Operators.subtract;
  };
  const btnAdd = () => {
    changeNumToPrevious();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    if (num1 === 0 && num2 === 0) {
      return setNumber('0');
    }

    if (num1 && !num2) {
      return setNumber(`${num1}`);
    }

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;

      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;

      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;

      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }

    setPreviousNumber('0');
  };

  return {
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
  };
};
