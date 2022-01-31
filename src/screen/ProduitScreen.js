import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ProduitScreen = () => {
  return (
    <View>
      <Text style={styles.text}>ProduitScreen</Text>
      <Text style={styles.text}>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ProduitScreen;
