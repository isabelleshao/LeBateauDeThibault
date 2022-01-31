import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { OpenLinkComponent } from "../component/OpenLinkComponent";
import globalStyles from "./constants/GlobalStyle";
const BateauScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={globalStyles.background}
      >
        <ScrollView>
          <View style={globalStyles.descriptionArea}>
            <Text>Nos bateaux partenaires</Text>
            <Text>Tous les eaux m&#xE8;nent &#xE0; Thibault.</Text>
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
          </View>
          <View style={globalStyles.boutonsArea}>
            <View style={globalStyles.boutonDuoStyle}>
              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Bateaux")}
              >
                <Text style={globalStyles.boutonTexte}>Bateaux</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Restaurants")}
              >
                <Text style={globalStyles.boutonTexte}>Restaurants</Text>
              </TouchableOpacity>
            </View>

            <View style={globalStyles.boutonDuoStyle}>
              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Recettes")}
              >
                <Text style={globalStyles.boutonTexte}>Recettes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Contact")}
              >
                <Text style={globalStyles.boutonTexte}>Contact</Text>
              </TouchableOpacity>
            </View>
          </View>
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

export default BateauScreen;
