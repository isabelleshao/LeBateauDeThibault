import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const ShoppingCart = () => {
  return (
    <View style={{ padding: 5 }}>
      <View styles={styles.nbelements}>
        <Text>0</Text>
      </View>
      <MaterialCommunityIcons name="cart" style={styles.shoppingcartstyles} />
    </View>
  );
};

const styles = StyleSheet.create({
  shoppingcartstyles: {
    fontSize: 30,
  },
  nbelements: {
    alignItems: "center",
  },
});
export default ShoppingCart;
