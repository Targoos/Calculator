import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '../components/Button';
import {styles} from '../theme/calculatorTheme';
import {useCalculator} from '../hooks/useCalculator';

export enum Operators {
  add,
  substract,
  multiply,
  divide,
}

export const CalculatorScreen = () => {
  const {
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
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result}>{number}</Text>
      <View style={styles.row}>
        <Button background="#9b9b9b" text="C" onPress={handleReset} />
        <Button
          background="#9b9b9b"
          text="+/-"
          onPress={handlePositiveNegative}
        />
        <Button background="#9b9b9b" text="del" onPress={handleDelete} />
        <Button background="#ff9427" text="÷" onPress={handleDivide} />
      </View>
      <View style={styles.row}>
        <Button text="7" onPress={handleNumberBuilder} />
        <Button text="8" onPress={handleNumberBuilder} />
        <Button text="9" onPress={handleNumberBuilder} />
        <Button background="#ff9427" text="×" onPress={handleMultiply} />
      </View>
      <View style={styles.row}>
        <Button text="4" onPress={handleNumberBuilder} />
        <Button text="5" onPress={handleNumberBuilder} />
        <Button text="6" onPress={handleNumberBuilder} />
        <Button background="#ff9427" text="−" onPress={handleSubstract} />
      </View>
      <View style={styles.row}>
        <Button text="1" onPress={handleNumberBuilder} />
        <Button text="2" onPress={handleNumberBuilder} />
        <Button text="3" onPress={handleNumberBuilder} />
        <Button background="#ff9427" text="+" onPress={handleAdd} />
      </View>
      <View style={styles.row}>
        <Button wider text="0" onPress={handleNumberBuilder} />
        <Button text="." onPress={handleNumberBuilder} />
        <Button background="#ff9427" text="=" onPress={calculate} />
      </View>
    </View>
  );
};
