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

const DetailScreen = ({ route, navigation }) => {
  const name = route.params.name;
  const image = route.params.image;
  const descriptioncom = route.params.descriptioncom;
  const aboutus = route.params.aboutus;
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Image style={styles.photo} source={image} />
          <Text style={globalStyles.titre}>{name}</Text>
          {descriptioncom !== undefined && (
            <Text style={styles.descriptioncom}>{descriptioncom}</Text>
          )}

          <Text style={styles.description}>{aboutus}</Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  descriptioncom: {
    marginVertical: 12,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    marginVertical: 12,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
  photo: {
    height: 300,
    width: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default DetailScreen;
