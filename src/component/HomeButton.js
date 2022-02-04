import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux'
import { removeAllFromBasket } from "../features/counter/basketSlice"

const HomeButton = (props) => {
  const dispatch = useDispatch()
  return (
    <TouchableOpacity 
      onPress={() => {
        dispatch(removeAllFromBasket());
        props.onPress();
      }}
    >
      <View style={{ padding: 5 }}>
        <View styles={styles.nbelements}>
          <MaterialCommunityIcons name="home" style={styles.shoppingcartstyles} />
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
export default HomeButton;
