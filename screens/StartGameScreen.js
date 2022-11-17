import {
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const handleConfirmation = () => {
    const choseNumber = parseInt(value);
    if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return;

    setConfirmed(true);
    setSelectedNumber(choseNumber);
    setValue("");
  };

  const handleResetInput = () => {
    setValue("");
    setConfirmed(false);
  };

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={styles.screen}>
            <Card>
              <Text>Elije un número:</Text>
              <Input value={value} onChangeText={handleInput} />
              <View style={styles.buttonContainer}>
                <Pressable
                  style={styles.cleanButton}
                  onPress={handleResetInput}
                >
                  <Text style={{ color: colors.claro }}>Limpiar</Text>
                </Pressable>
                <Pressable
                  style={{
                    ...styles.cleanButton,
                    ...styles.confirmButton,
                  }}
                  onPress={handleConfirmation}
                >
                  <Text style={{ color: colors.claro }}>Confirmar</Text>
                </Pressable>
              </View>
            </Card>
            {confirmed && (
              <Card newStyles={{ marginTop: 50, width: 200 }}>
                <Text>Tu número:</Text>
                <Text>{selectedNumber}</Text>
                <Pressable style={styles.startButton}
                  onPress={() => onStartGame(selectedNumber)}>
                  <Text style={{ color: colors.claro }}>Empezar juego</Text>
                </Pressable>
              </Card>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    marginTop: 50,
    fontsize:20,
    fontFamily: "Nunito",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  cleanButton: {
    backgroundColor: colors.acento,
    height: 35,
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  confirmButton: {
    backgroundColor: colors.principal,
    width: "40%",
  },
  startButton: {
    backgroundColor: colors.hot,
    height: 35,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});