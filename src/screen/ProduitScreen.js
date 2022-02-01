import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../component/GlobalStyle";
const ProduitScreen = (props) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
          <Text style={styles.titre}>Choississez vos produits</Text>
          <View style={styles.boutonsArea}>
            <View>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() =>
                  props.navigation.navigate("Choisissez vos produits", {
                    categorie: 0,
                  })
                }
              >
                <MaterialCommunityIcons
                  name="jellyfish"
                  style={styles.iconStyle}
                />
                <Text style={globalStyles.boutonTexte}>Poissons</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() =>
                  props.navigation.navigate("Choisissez vos produits", {
                    categorie: 1,
                  })
                }
              >
                <MaterialCommunityIcons
                  name="jellyfish"
                  style={styles.iconStyle}
                />
                <Text style={globalStyles.boutonTexte}>Coquillages</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() =>
                  props.navigation.navigate("Choisissez vos produits", {
                    categorie: 2,
                  })
                }
              >
                <View style={styles.iconRound}>
                  <MaterialCommunityIcons
                    name="jellyfish"
                    style={styles.iconStyle}
                  />
                </View>
                <Text style={globalStyles.boutonTexte}>Crustacés</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() =>
                  props.navigation.navigate("Choisissez vos produits", {
                    categorie: undefined,
                  })
                }
              >
                <MaterialCommunityIcons
                  name="jellyfish"
                  style={styles.iconStyle}
                />
                <Text style={globalStyles.boutonTexte}>Promotions</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boutonsArea: {
    marginHorizontal: 15,
    justifyContent: "center",
  },
  boutonSoloStyle: {
    marginHorizontal: "1%",
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 30,
    width: "98%",
    flexDirection: "row",
    justifyContent: "center",
  },

  iconStyle: {
    fontSize: 30,
    color: "black",
    marginRight: 10,
  },

  titre: {
    fontSize: 30,
    color: "black",
    fontStyle: "italic",
    marginBottom: 30,
    marginTop: 20,
    alignSelf: "center",
  },
});

export default ProduitScreen;
