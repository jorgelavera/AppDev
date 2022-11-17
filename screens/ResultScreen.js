import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import win from "../assets/images/win.jpg";
import lose from "../assets/images/lose.jpg";

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("");
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "win") {
      setImage(win);
      setMensaje('¡Ganaste!');
      return mensaje;
    } else {
      setImage(lose);
      setMensaje('Perdiste, lo siento...');
      return mensaje;
    }
  };

  console.log(mensaje);
  return (
    <View style={styles.container}>
      <Card>
        <Text>{`${mensaje}`}</Text>
      </Card>
      <Image style={styles.imageContainer} source={image} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 320,
    width: 320,
    marginTop: 50,
  },
});