import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "./constants/GlobalStyle";
import { OpenLinkComponent } from "../component/OpenLinkComponent";

const HomeScreen = (props) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={globalStyles.background}
      >
        <ScrollView>
          <View style={globalStyles.descriptionArea}>
            <Text style={styles.titre}>Le Bateau de Thibault</Text>
            <Text>Vente en direct de notre bateau</Text>
            <Text>Produits selon la saison, livraisons sur Paris</Text>
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
            <TouchableOpacity
              style={styles.boutonSoloStyle}
              onPress={() => props.navigation.navigate("Produits")}
            >
              <Text style={globalStyles.boutonTexte}>
                <MaterialCommunityIcons name="fish" style={styles.iconStyle} />
                Produits et Promotions
              </Text>
            </TouchableOpacity>

            <View style={globalStyles.boutonDuoStyle}>
              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Bateaux")}
              >
                <Text style={globalStyles.boutonTexte}>
                  <MaterialCommunityIcons
                    name="anchor"
                    style={styles.iconStyle}
                  />
                  Bateaux
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Restaurants")}
              >
                <Text style={globalStyles.boutonTexte}>
                  <MaterialIcons name="storefront" style={styles.iconStyle} />
                  Restaurants
                </Text>
              </TouchableOpacity>
            </View>

            <View style={globalStyles.boutonDuoStyle}>
              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Recettes")}
              >
                <Text style={globalStyles.boutonTexte}>
                  <MaterialCommunityIcons
                    name="silverware-clean"
                    style={styles.iconStyle}
                  />
                  Recettes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={globalStyles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Contact")}
              >
                <Text style={globalStyles.boutonTexte}>
                  <MaterialCommunityIcons
                    name="jellyfish-outline"
                    style={styles.iconStyle}
                  />
                  Contact
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titre: {
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
  },

  boutonSoloStyle: {
    marginHorizontal: "1%",
    marginBottom: 10,
    backgroundColor: "powderblue",
    padding: 20,
    width: "98%",
  },

  iconStyle: {
    fontSize: 30,
    color: "black",
  },
});

export default HomeScreen;
