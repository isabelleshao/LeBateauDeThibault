import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";
import globalStyles from "../component/GlobalStyle";
const BateauComponent = ({ route, navigation }) => {
  const name = route.params.name;
  const image = route.params.image;
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Text style={styles.text}>{name}</Text>
          <Image source={image} />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default BateauComponent;
