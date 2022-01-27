import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import BoutonHome from "../component/BoutonHome";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const HomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Text style={styles.text}>Le Bateau de Thibault</Text>
        <Text>Vente en direct de notre bateau</Text>
        <Text>Produits selon la saison, livraisons sur Paris</Text>
        <Text>06 03 99 99 78</Text>
        <Text>lebateaudethibault@gmail.com</Text>
        <Text>https://www.lebateaudethibault.fr</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.boutonProduitStyle}
          onPress={() => props.navigation.navigate("ProduitScreen")}
        >
          <Text style={styles.boutonTexte}>
            <MaterialCommunityIcons name="fish" size={24} color="black" />{" "}
            Produits et Promotions
          </Text>
        </TouchableOpacity>

        <View style={styles.boutonsArea}>
          <FlatList
            numColumns={2}
            data={[
              {
                key: "Bateaux",
                icon: (
                  <MaterialCommunityIcons
                    name="anchor"
                    size={24}
                    color="black"
                  />
                ),
                action: console.log("testonPress"),
              },
              {
                key: "Restaurants",
                icon: (
                  <MaterialIcons name="storefront" size={24} color="black" />
                ),
                action: console.log("testonPress"),
              },
              {
                key: "Recettes",
                icon: (
                  <MaterialCommunityIcons
                    name="silverware-clean"
                    size={24}
                    color="black"
                  />
                ),
                action: console.log("testonPress"),
              },
              {
                key: "Contact",
                icon: (
                  <MaterialCommunityIcons
                    name="jellyfish-outline"
                    size={24}
                    color="black"
                  />
                ),
                action: console.log("testonPress"),
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.boutonGeneriqueStyle}
                onPress={() => console.log("testonPress")}
              >
                <Text style={styles.boutonTexte}>
                  {item.icon}
                  {item.key}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
  },
  boutonsArea: {},

  boutonProduitStyle: {
    borderRadius: 4,
    marginHorizontal: "1%",
    marginBottom: 6,
    backgroundColor: "powderblue",
    padding: 10,
    width: "98%",
  },

  boutonGeneriqueStyle: {
    borderRadius: 4,
    marginHorizontal: "1%",
    marginBottom: 6,
    backgroundColor: "powderblue",
    padding: 10,
    width: "48%",
  },
  boutonTexte: {
    textAlignVertical: "top",
    textAlign: "center",
    fontSize: 20,
  },
});

export default HomeScreen;
