/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  background?: string;
  wider?: boolean;
  onPress: (textNumber: string) => void;
}

export const Button = ({
  text,
  background = '#2d2d2d',
  wider = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: background,
          width: wider ? 180 : 80,
        }}>
        <Text
          numberOfLines={1}
          adjustsFontSizeToFit
          style={{
            ...styles.buttonText,
            color: background === '#9b9b9b' ? 'black' : 'white',
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    padding: 10,
    fontSize: 30,
    fontWeight: '300',
  },
});
