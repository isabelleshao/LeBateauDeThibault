import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
} from "react-native";

const ProduitScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Text style={styles.text}>ProduitScreen</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
});

export default ProduitScreen;
