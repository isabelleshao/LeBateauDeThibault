import React from "react";
import { View, StyleSheet } from "react-native";

import { OpenLinkComponent } from "../component/OpenLinkComponent";

const CoordonneesComponent = () => {
  return (
    <View>
      <OpenLinkComponent url={"tel:0663999978"}>
        06.63.99.99.78
      </OpenLinkComponent>
      <OpenLinkComponent url={"mailto:lebateaudethibault@gmail.com"}>
        lebateaudethibault@gmail.com
      </OpenLinkComponent>
      <OpenLinkComponent url={"https://www.facebook.com/lebateaudethibault"}>
        www.facebook.com/lebateaudethibault
      </OpenLinkComponent>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CoordonneesComponent;
