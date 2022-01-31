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
const HomeScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <View style={styles.description}>
            <Text style={styles.titre}>Le Bateau de Thibault</Text>
            <Text>Vente en direct de notre bateau</Text>
            <Text>Produits selon la saison, livraisons sur Paris</Text>
            <Text>06 03 99 99 78</Text>
            <Text>lebateaudethibault@gmail.com</Text>
            <Text>https://www.lebateaudethibault.fr</Text>
          </View>

          <View style={styles.boutonsArea}>
            <TouchableOpacity
              style={styles.boutonSoloStyle}
              onPress={() => props.navigation.navigate("Produits")}
            >
              <Text style={styles.boutonTexte}>
                <MaterialCommunityIcons name="fish" style={styles.iconStyle} />
                Produits et Promotions
              </Text>
            </TouchableOpacity>

            <View style={styles.boutonDuoStyle}>
              <TouchableOpacity
                style={styles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Bateaux")}
              >
                <Text style={styles.boutonTexte}>
                  <MaterialCommunityIcons
                    name="anchor"
                    style={styles.iconStyle}
                  />
                  Bateaux
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Restaurants")}
              >
                <Text style={styles.boutonTexte}>
                  <MaterialIcons name="storefront" style={styles.iconStyle} />
                  Restaurants
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.boutonDuoStyle}>
              <TouchableOpacity
                style={styles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Recettes")}
              >
                <Text style={styles.boutonTexte}>
                  <MaterialCommunityIcons
                    name="silverware-clean"
                    style={styles.iconStyle}
                  />
                  Recettes
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.boutonGeneriqueStyle}
                onPress={() => props.navigation.navigate("Contact")}
              >
                <Text style={styles.boutonTexte}>
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
  container: {
    flex: 1,
  },

  description: {
    marginHorizontal: 15,
    alignItems: "center",
    marginVertical: 30,
    flex: 0.5,
  },
  titre: {
    fontSize: 30,
    color: "white",
    fontStyle: "italic",
  },
  boutonsArea: {
    marginHorizontal: 15,
    alignItems: "flex-end",
    flex: 0.5,
  },

  boutonSoloStyle: {
    marginHorizontal: "1%",
    marginBottom: 10,
    backgroundColor: "powderblue",
    padding: 20,
    width: "98%",
  },

  boutonDuoStyle: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 10,
  },

  boutonGeneriqueStyle: {
    marginHorizontal: "1%",
    backgroundColor: "powderblue",
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "48%",
  },

  boutonTexte: {
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 20,
  },

  iconStyle: {
    fontSize: 30,
    color: "black",
  },
});

export default HomeScreen;
