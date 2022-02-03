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
    title: `Homard en chaud-froid`,
    img: require("../assets/img/homardRecette.png"),
    icon: require("../assets/img/homardRecette_icon.png"),
    aboutus: `Faites cuire les homards dans de l'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne. Laissez cuire 20 minutes. Egouttez-les et laissez-les refroidir.\n\nDécoupez les coffres des homards dans le sens de la longueur.\n\nMélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée.`,
  },
  {
    title: "Noix de St-Jacques",
    img: require("../assets/img/saintJacques.png"),
    icon: require("../assets/img/saintJacques_icon.png"),
    descriptioncom: "XXX YYY ZZZ",
    aboutus: `Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. Les faire revenir en laissant le milieu translucide puis les retirer du feu.\n\nAjouter l'ail et le persil dans la pooele et laisser cuire quelques secondes. Bien faire chauffer la pooele, puis flamber au Cognac. Une fois la flamme éteinte, ajouter les noix de Saint-Jacques (il ne faut pas les flamber car elles perdraient leur saveur).\n\nDéguster chaud nature ou accompagné d'une fondue de poireaux.
`,
  },
  {
    title: "Bar rôti au laurier frais",
    img: require("../assets/img/barRecette.png"),
    icon: require("../assets/img/barRecette_icon.png"),
    aboutus: `	  Sur une plaque ou un plat allant au four, disposer  quelques feuilles de laurier frais, verser un filet d'huile d'olive et du gros sel. Disposer le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros sel sur la peau.\n\nCuire au four pendant 12 min à 240° C.`,
  },

  {
    title: "Tourteau",
    img: require("../assets/img/tourteau.png"),
    icon: require("../assets/img/tourteau.png"),
    descriptioncom: "XXX YYY ZZZ",
    aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
  },

  {
    title: "Recette",
    img: require("../assets/img/tourteau.png"),
    icon: require("../assets/img/tourteau.png"),
    descriptioncom: "XXX YYY ZZZ",
    aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
  },
  {
    title: "Recette",
    img: require("../assets/img/tourteau.png"),
    icon: require("../assets/img/tourteau.png"),
    descriptioncom: "XXX YYY ZZZ",
    aboutus: `Qu'il est chaud le soleil\nQuand nous sommes en vacances\nY a d' la joie, des hirondelles\nC'est le sud de la France\nPapa bricole au garage\nMaman lit dans la chaise longue\nDans ce joli paysage\nMoi, je me balade en tongs\n\nQue de bonheur!\nQue de bonheur!`,
  },
];

const RecetteScreen = (props) => {
  //Parce que ScrollView et FlatList ne sont pas compatible,
  //https://stackoverflow.com/questions/66310158/flatlist-inside-scrollview-doesnt-work-in-react-native
  const BeforeRecetteScreen = () => {
    return (
      <View style={globalStyles.descriptionArea}>
        <Text style={globalStyles.titre}>Nos recettes</Text>
        <Text style={globalStyles.bold}>
          Toutes les recettes du bateau de Thibault.
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
        <View>
          <View style={globalStyles.boutonsArea}>
            <FlatList
              data={BATEAUX}
              ListHeaderComponent={BeforeRecetteScreen}
              keyExtractor={(item, index) => item.title}
              numColumns={2}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity
                    style={styles.boutonAvecIcon}
                    onPress={() =>
                      props.navigation.navigate("Nos recettes", {
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
    width: "70%",
  },
});

export default RecetteScreen;
