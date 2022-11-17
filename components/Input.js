import { StyleSheet, TextInput } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Input = ({ style, ...restProps }) => {
  return (
    <TextInput
      blurOnSubmit
      autoCapitalization="none"
      autoCorrect={false}
      keyboardType="numeric"
      maxLength={2}
      style={{ ...styles.input, ...style }}
      {...restProps}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.principal,
    height: 30,
    borderBottomWidth: 2,
    marginVertical: 10,
    width: 50,
  },
});

