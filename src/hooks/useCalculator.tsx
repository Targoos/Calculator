import {useRef, useState} from 'react';
import {Operators} from '../screens/CalculatorScreen';

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const handleReset = () => {
    setNumber('0');
    setPreviousNumber('0');
  };

  const handleNumberBuilder = (textNumber: string) => {
    // eslint-disable-next-line curly
    if (number.includes('.') && textNumber === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const handlePositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const handleDelete = () => {
    let tempNumber = number;

    if (number.includes('-')) {
      tempNumber = number.substr(1);
    }

    if (tempNumber.length - 1) {
      setNumber(number.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changePreviousNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const handleAdd = () => {
    lastOperation.current = Operators.add;
    changePreviousNumber();
  };

  const handleSubstract = () => {
    lastOperation.current = Operators.substract;
    changePreviousNumber();
  };

  const handleMultiply = () => {
    lastOperation.current = Operators.multiply;
    changePreviousNumber();
  };

  const handleDivide = () => {
    lastOperation.current = Operators.divide;
    changePreviousNumber();
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(previousNumber);

    // eslint-disable-next-line curly
    if (num1 === 0 && num2 === 0) return;

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.substract:
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
    number,
    previousNumber,
    handleReset,
    handleNumberBuilder,
    handlePositiveNegative,
    handleDelete,
    handleAdd,
    handleSubstract,
    handleMultiply,
    handleDivide,
    calculate,
  };
};
