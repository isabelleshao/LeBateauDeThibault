import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/HomeScreen";
import ContactScreen from "../screen/ContactScreen";
import BateauScreen from "../screen/BateauScreen";
import RestaurantScreen from "../screen/RestaurantScreen";
import RecetteScreen from "../screen/RecetteScreen";
import ProduitScreen from "../screen/ProduitScreen";
import PanierScreen from "../screen/PanierScreen";
import DetailScreen from "../screen/DetailScreen";
import ProduitDetailScreen from "../screen/ProduitDetailScreen";
import ShoppingCart from "../component/ShoppingCart";
import HomeButton from "../component/HomeButton";



const Stack = createStackNavigator();


function screenOptionStyle(props) {
  return {
    headerMode: "screen",
    headerTintColor: "black",
    headerBackTitle: "Back",
    headerStyle: { backgroundColor: "#5AB6FF" },
    gestureEnabled: true,
    headerLeft: () => (
      <HomeButton
        onPress={() => {
          props.navigation.navigate("Accueil");
        }}
      ></HomeButton>
    ),
    headerRight: () => (
      <ShoppingCart
        onPress={() => {
          props.navigation.navigate("Panier");
        }}
      ></ShoppingCart>
    ),
  };
}

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Accueil"
      screenOptions={screenOptionStyle}
    >
      <Stack.Screen name="Accueil" component={HomeScreen} />
      <Stack.Screen name="Produits" component={ProduitScreen} />

      <Stack.Screen name="Bateaux" component={BateauScreen} />
      <Stack.Screen name="Restaurants" component={RestaurantScreen} />

      <Stack.Screen name="Recettes" component={RecetteScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />

      <Stack.Screen name="Nos bateaux partenaires" component={DetailScreen} />
      <Stack.Screen
        name="Nos restaurants partenaires"
        component={DetailScreen}
      />
      <Stack.Screen name="Nos recettes" component={DetailScreen} />
      <Stack.Screen
        name="Choisissez vos produits"
        component={ProduitDetailScreen}
      />

      <Stack.Screen name="Panier" component={PanierScreen} />
    </Stack.Navigator>
  );
};

const PanierStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Panier" component={PanierScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, PanierStackNavigator };
