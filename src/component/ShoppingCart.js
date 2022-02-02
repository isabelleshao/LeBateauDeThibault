import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Badge } from "react-native-elements";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ShoppingCart = (props) => {
  return (
    <TouchableOpacity 
      onPress={props.onPress}
    >
      <View style={{ padding: 5 }}>
        <View styles={styles.nbelements}>
          <MaterialCommunityIcons name="cart" style={styles.shoppingcartstyles} />
          <Badge value="7" status="error" containerStyle= {{position:"absolute", top:-4, left:-4 }} />
        </View>
      </View>
    </TouchableOpacity>
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
