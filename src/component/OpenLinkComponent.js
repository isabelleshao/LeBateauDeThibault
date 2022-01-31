import React, { useCallback } from "react";
import { Text, StyleSheet, Linking } from "react-native";

const OpenLinkComponent = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text style={styles.contacts} onPress={handlePress}>
      {children}
    </Text>
  );
};
const styles = StyleSheet.create({
  contacts: {
    alignSelf: "center",
    fontSize: 20,
  },
});

export { OpenLinkComponent };
