import React, {useState} from "react";
import { useSelector, useDispatch } from 'react-redux'
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
} from "react-native";
import globalStyles from "../component/GlobalStyle";

const PanierScreen = () => {
  const dispatch = useDispatch();
  const panier = useSelector((state) => state.basket.basket);
  const keys = Object.keys(panier);

  const [chooseData, setChooseData] = useState('Modifier la quantité ')
  const [isModalVisible, setisModalVisible] = useState(false)
  const [selectedId, setId] = useState(0);

  const filteredData = data.filter((produit) => (keys.includes(String(produit.id)) && panier[produit.id] > 0) )
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  }

  const setData = (option) => {
    setChooseData(option);
  }
  const getTotal = () => {
    var total = 0;
    filteredData.forEach(element => 
      total += Number(element.price*panier[element.id])
    )
    return total;
    }

  var date = new Date().toLocaleDateString();
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
                onPress={() => {setId(filteredProduit.id);
                  setisModalVisible(true);
                }}
              >
                  <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                  >
                  <ModalPicker
                    style={{backgroundColor: "white"}}
                    changeModalVisibility = {changeModalVisibility}
                    setData={setData}
                    selectedId={selectedId}
                  />
                </Modal>
                <Image
                  style={styles.icon}
                  source={require("../assets/img/poulpe.png")}
                />
                <View>
                  <Text style={globalStyles.bold}>{filteredProduit.name}</Text>
                  <Text>
                    {" "}
                    {panier[filteredProduit.id]}x{filteredProduit.price} € ={" "}
                    {filteredProduit.price * panier[filteredProduit.id]}€{" "}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <TouchableOpacity style={styles.container}
                  onPress={() => console.log("oui")}>
          <View>
            <Text> Total : {getTotal()} </Text>     
          </View>
          <View>
          </View>
          <View>
            <Text>{date}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
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

  
});

export default PanierScreen;
