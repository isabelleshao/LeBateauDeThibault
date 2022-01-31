import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BateauComponent = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        {props.icon} {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default BateauComponent;
