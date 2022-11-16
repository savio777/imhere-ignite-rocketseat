import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import Home from "./src/screens/Home";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Home />
      <StatusBar style="light" backgroundColor="#131016" />
    </View>
  );
}
