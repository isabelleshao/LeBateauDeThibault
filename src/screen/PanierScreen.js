import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBasket} from "../features/counter/basketSlice"
import data from "../assets/data.json";


import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import globalStyles from "../component/GlobalStyle";


const PanierScreen = () => {
  const dispatch = useDispatch()
  const panier = useSelector((state) => state.basket.basket);
  const keys = Object.keys(panier);
  const filteredData = data.filter((produit) => (keys.includes(String(produit.id)) && panier[produit.id] > 0) )
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <ScrollView>
        {filteredData.map((filteredProduit) => (
            <View key={filteredProduit.id}>
              <TouchableOpacity
                style={styles.boutonSoloStyle}
                onPress={() => dispatch(removeFromBasket(filteredProduit.id))}
              >
                <Image
                  style={styles.icon}
                  source={require("../assets/img/poulpe.png")}
                />
                <View>
                  <Text style={globalStyles.bold}>{filteredProduit.name}</Text>
                  <Text> {panier[filteredProduit.id]}x{filteredProduit.price} € = {filteredProduit.price*panier[filteredProduit.id]}€ </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container : {flex:1},
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

export default PanierScreen;
