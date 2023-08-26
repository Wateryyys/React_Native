import { StyleSheet,View, Text } from "react-native";
import React from "react";
import FlatListAPI from "./components/FlatListAPI";
import News from "./components/News";

const App = () => {
  return (
    <View style = {styles.container}>
      {/* <FlatListAPI/> */}
      <News/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  }
});
