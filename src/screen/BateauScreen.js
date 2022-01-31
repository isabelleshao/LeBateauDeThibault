import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import CoordonneesComponent from "../component/CoordonneesComponent";
import globalStyles from "../component/GlobalStyle";

const BATEAUX = [
  {
    title: "De la Brise",
    img: require("../assets/img/deLaBrise.png"),
    icon: require("../assets/img/deLaBrise_icon.png"),
    descriptioncom: "XXX YYY ZZZ ",
    aboutus: "rere",
  },
  {
    title: "Saphir",
    img: require("../assets/img/saphir.png"),
    icon: require("../assets/img/saphir_icon.png"),
    descriptioncom: "XXX YYY ZZZ ",
    aboutus: "",
  },
  {
    title: "Gast Micher",
    img: require("../assets/img/gastMicher.png"),
    icon: require("../assets/img/gastMicher_icon.png"),
    descriptioncom: "XXX YYY ZZZ ",
    aboutus: "",
  },
  {
    title: "Aquilon",
    img: require("../assets/img/aquilon.png"),
    icon: require("../assets/img/aquilon_icon.png"),
    descriptioncom: "XXX YYY ZZZ ",
    aboutus: "",
  },
];

const BateauScreen = (props) => {
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

  const AfterBateauScreen = () => {
    return (
      <View style={globalStyles.boutonDuoStyle}>
        <TouchableOpacity
          style={styles.boutonAvecIcon}
          onPress={() => props.navigation.navigate("Contact")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/img/ancre.png")}
          />
          <Text style={styles.boutonTexte}>Contact</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.boutonAvecIcon}
          onPress={() => props.navigation.navigate("Contact")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/img/ancre.png")}
          />
          <Text style={styles.boutonTexte}>Contact</Text>
        </TouchableOpacity>
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
        <View>
          <View style={globalStyles.boutonsArea}>
            <FlatList
              data={BATEAUX}
              ListHeaderComponent={BeforeBateauScreen}
              ListFooterComponent={AfterBateauScreen}
              keyExtractor={(item, index) => item.title}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.boutonAvecIcon}
                    onPress={() =>
                      props.navigation.navigate("BateauSolo", {
                        name: item.title,
                        image: item.img,
                        descriptioncom: item.descriptioncom,
                        aboutus: item.aboutus,
                      })
                    }
                  >
                    <Image style={styles.icon} source={item.icon} />
                    <Text style={styles.boutonTexte}> {item.title}</Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  boutonAvecIcon: {
    flexDirection: "row",
    marginHorizontal: "2%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "48%",
    marginBottom: 10,
  },
  icon: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  boutonTexte: {
    alignSelf: "center",
    color: "black",
    fontSize: 16,
  },
});

export default BateauScreen;
