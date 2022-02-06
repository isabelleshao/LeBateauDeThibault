import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalPicker } from "../component/ModalPicker";
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
  Modal,
  Alert,
} from "react-native";
import globalStyles from "../component/GlobalStyle";

const PanierScreen = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.basket.basket);
  const keys = Object.keys(panier);

  const [chooseData, setChooseData] = useState("Modifier la quantité ");
  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedId, setId] = useState(0);

  const filteredData = data.filter(
    (produit) => keys.includes(String(produit.id)) && panier[produit.id] > 0
  );
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (option) => {
    setChooseData(option);
  };
  const getTotal = () => {
    var total = 0;
    filteredData.forEach(
      (element) => (total += Number(element.price * panier[element.id]))
    );
    return total;
  };

  const createValidationAlert = () =>
    Alert.alert("Validation", "Commande validée !");

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Envoyer votre commande?",
      `Envoyer votre commande de ` + getTotal() + ` € à Thibault?`,
      [
        {
          text: "Non",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Oui",
          onPress: () => createValidationAlert,
        },
      ],
      {
        cancelable: true,
      }
    );

  var date = new Date().toLocaleDateString();

  if (filteredData.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/img/background.png")}
          resizeMode="cover"
          style={{ flex: 1, justifyContent: "center" }}
        >
          <ScrollView>
            <Text style={styles.panierVide}>Votre panier est vide </Text>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  } else {
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
                  onPress={() => {
                    setId(filteredProduit.id);
                    setisModalVisible(true);
                  }}
                >
                  <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isModalVisible}
                  >
                    <ModalPicker
                      style={{ backgroundColor: "white" }}
                      changeModalVisibility={changeModalVisibility}
                      setData={setData}
                      selectedId={selectedId}
                    />
                  </Modal>
                  <Image
                    style={styles.icon}
                    source={require("../assets/img/poulpe.png")}
                  />
                  <View>
                    <Text style={globalStyles.bold}>
                      {filteredProduit.name}
                    </Text>
                    <Text>
                      {panier[filteredProduit.id]}x{filteredProduit.price} € ={" "}
                      {filteredProduit.price * panier[filteredProduit.id]}€{" "}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            ))}

            <View style={styles.total}>
              <TouchableOpacity onPress={() => console.log("oui")}>
                <View>
                  <Text style={styles.totalText}>Total : {getTotal()} €</Text>
                  <Text style={styles.commandeText}>
                    Lieu de Livraison (choisir) : {date}
                  </Text>
                  <Text style={styles.commandeText}>
                    Date de Livraison : {date}
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Envoyer votre commande?",
                    `Envoyer votre commande de ` +
                      getTotal() +
                      ` € à Thibault?`,
                    [
                      {
                        text: "Non",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      {
                        text: "Oui",
                        onPress: () => Alert.alert("Votre commande est passée"),
                      },
                    ],
                    {
                      cancelable: true,
                    }
                  )
                }
              >
                <View>
                  <Text style={styles.totalText}>Valider</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: { flex: 1 },

  total: {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  totalText: {
    fontSize: 30,
    marginHorizontal: 10,
    textAlign: "right",
    color: "white",
  },
  commandeText: {
    fontSize: 20,
    marginHorizontal: 10,
    color: "white",
  },

  panierVide: {
    padding: 20,
    fontSize: 20,
  },
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

  validerButton: {
    fontSize: 30,
  },
});

export default PanierScreen;
