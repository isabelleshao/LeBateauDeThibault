import React from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import CoordonneesComponent from "../component/CoordonneesComponent";
import globalStyles from "../component/GlobalStyle";
const ContactScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Image
            style={styles.photo}
            source={require("../assets/img/TIG.png")}
          />
          <Text style={styles.titre}>Le bateau de Thibault</Text>
          <CoordonneesComponent />
          <Text style={styles.description}>
            Qu'il est chaud le soleil {"\n"} Quand nous sommes en vacances{" "}
            {"\n"} Y a d' la joie, des hirondelles {"\n"} C'est le sud de la
            France {"\n"}
            Papa bricole au garage {"\n"} Maman lit dans la chaise longue {"\n"}
            Dans ce joli paysage {"\n"} Moi, je me balade en tongs {"\n"} {"\n"}{" "}
            Que de bonheur! {"\n"} Que de bonheur!
          </Text>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titre: {
    fontSize: 30,
    alignSelf: "center",
  },
  photo: {
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
  description: {
    marginVertical: 12,
    textAlign: "center",
    fontSize: 16,
    fontStyle: "italic",
  },
});

export default ContactScreen;
