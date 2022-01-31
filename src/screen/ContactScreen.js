import React, { useCallback } from "react";
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { OpenLinkComponent } from "../component/OpenLinkComponent";

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
          <View>
            <OpenLinkComponent url={"tel:0663999978"}>
              06.63.99.99.78
            </OpenLinkComponent>
            <OpenLinkComponent url={"mailto:lebateaudethibault@gmail.com"}>
              lebateaudethibault@gmail.com
            </OpenLinkComponent>
            <OpenLinkComponent
              url={"https://www.facebook.com/lebateaudethibault"}
            >
              www.facebook.com/lebateaudethibault
            </OpenLinkComponent>
          </View>

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
  container: {
    flex: 1,
  },
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
