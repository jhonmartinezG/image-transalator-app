import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/pages/Home/Home";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" animated={true} />
      <Home />
    </View>
  );
}
