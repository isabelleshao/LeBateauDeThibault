import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../component/BasketSlice";

import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import globalStyles from "../component/GlobalStyle";
import data from "../assets/data.json";

const produits = data;

const ProduitDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const ResultatFiltre = () => {
    if (route.params.categorie !== undefined) {
      return <FiltrerCategorie />;
    }
    return <FiltrerPromotion />;
  };

  const FiltrerCategorie = () => {
    return (
      <View>
        {produits
          .filter((produit) => produit.category === route.params.categorie)
          .map((filteredProduit) => (
            <View key={filteredProduit.id}>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() => dispatch(addToBasket(filteredProduit.id))}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/img/poulpe.png")}
                />
                <View>
                  <Text style={globalStyles.bold}>{filteredProduit.name}</Text>
                  <Text>{filteredProduit.price} €</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  };

  const FiltrerPromotion = () => {
    return (
      <View>
        {produits
          .filter((produit) => produit.discount > 0.0)
          .map((filteredProduit) => (
            <View key={filteredProduit.id}>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() => dispatch(addToBasket(filteredProduit.id))}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/img/poulpe.png")}
                />
                <View>
                  <Text style={globalStyles.bold}>{filteredProduit.name}</Text>
                  <Text>{filteredProduit.price} €</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={globalStyles.background}
      >
        <ScrollView>
          <Text style={globalStyles.titre}>Choisissez vos produits :</Text>
          <ResultatFiltre />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  boutonSoloStyle: {
    marginHorizontal: "1%",
    marginVertical: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 30,
    width: "98%",
    flexDirection: "row",
    justifyContent: "flex-start",
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

export default ProduitDetailScreen;
