import React from "react";
import { Text, StyleSheet, SafeAreaView, ImageBackground, View } from "react-native";
import CoordonneesComponent from "../component/CoordonneesComponent";
import globalStyles from "../component/GlobalStyle";


const ProduitDetailScreen = (props) => {
  //Parce que ScrollView et FlatList ne sont pas compatible,
  //https://stackoverflow.com/questions/66310158/flatlist-inside-scrollview-doesnt-work-in-react-native
  const BeforeBateauScreen = () => {
    return (
      <View style={globalStyles.descriptionArea}>
        <Text style={globalStyles.titre}>Nos bateaux partenaires</Text>
        <Text style={globalStyles.bold}>
          Tous les eaux m&#xE8;nent &#xE0; Thibault.
        </Text>
        <CoordonneesComponent />
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
        <View></View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ProduitDetailScreen;
