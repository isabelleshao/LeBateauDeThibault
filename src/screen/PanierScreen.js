import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalPicker } from "../component/ModalPicker";
import data from "../assets/data.json";
import deliverySpots from "../assets/deliverySpots.json";
import nextDay from "date-fns/nextDay";

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
  Picker,
} from "react-native";
import globalStyles from "../component/GlobalStyle";

const PanierScreen = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.basket.basket);
  const keys = Object.keys(panier);

  const [chooseData, setChooseData] = useState("Modifier la quantité ");
  const [isModalVisible, setisModalVisible] = useState(false);
  const [selectedId, setId] = useState(0);
  const [selectedValue, setSelectedValue] = useState(deliverySpots[0]);

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

  const createConfirmationAlert = () =>
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
          onPress: () => createValidationAlert(),
        },
      ],
      {
        cancelable: true,
      }
    );

  const date = nextDay(new Date(), new Date(selectedValue.date).getDay());

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
              <View>
                <Text style={styles.totalText}>Total : {getTotal()} €</Text>
              </View>
              <TouchableOpacity onPress={() => console.log(selectedValue)}>
                <View style={styles.container}>
                  <Text style={styles.commandeText}>Point de livraison :</Text>
                  <Picker
                    style={styles.pickerStyle}
                    selectedValue={selectedValue.id}
                    onValueChange={(id) =>
                      setSelectedValue(
                        deliverySpots.find((spot) => spot.id == id)
                      )
                    }
                  >
                    <Picker.Item
                      label={deliverySpots[0].name}
                      value={deliverySpots[0].id}
                    />
                    <Picker.Item
                      label={deliverySpots[1].name}
                      value={deliverySpots[1].id}
                    />
                    <Picker.Item
                      label={deliverySpots[2].name}
                      value={deliverySpots[2].id}
                    />
                    <Picker.Item
                      label={deliverySpots[3].name}
                      value={deliverySpots[3].id}
                    />
                  </Picker>
                </View>
                <Text style={styles.commandeText}>
                  Date de Livraison : {date.toLocaleDateString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={createConfirmationAlert}>
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

  pickerStyle: {
    backgroundColor: "white",
    fontSize: 20,
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
