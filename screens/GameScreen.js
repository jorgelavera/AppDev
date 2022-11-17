import { Button, StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";

const GameScreen = ({ handleResult }) => {
  const [currentGuess, setCurrentGuess] = useState();

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, []);

  return (
    <View style={styles.container}>
      <Text>La suposición del oponente:</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Pressable style={styles.resultButton}
          onPress={() => handleResult("lower", currentGuess)}>
          <Text style={{ color: colors.claro }}>Es menor</Text>
        </Pressable>
        <Pressable style={styles.resultButton}
          onPress={() => handleResult("greater", currentGuess)}>
          <Text style={{ color: colors.claro }}>Es mayor</Text>
        </Pressable>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "80%",
  },
  resultButton: {
    backgroundColor: colors.principal,
    height: 35,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});