import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./src/navigation/StackNavigation";
import store from "./src/app/store"
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store = {store}>
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    </Provider>
  );
}
