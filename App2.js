import { StyleSheet,View, Text } from "react-native";
import React from "react";
import TouchableExample from "./components/TouchableExample";
import RecapTouchable from "./components/RecapTouchable";
// import Example_UseEffect from "./components/Example_UseEffect";
import UseEffectFlatList from "./components/UseEffectFlatList";
import RandomUsersScreen from "./components/RandomUsersScreen";
import FlatList_Example1 from "./components/FlatList_Example1";
import FlatList_HeaderFooter from "./components/FlatList_HeaderFooter";

const App = () => {
  return (
    <View style = {styles.container}>
      {/* <TouchableExample/> */}
      {/* <RecapTouchable/> */}
      {/* <Example_UseEffect/> */}
      {/* <UseEffectFlatList/> */}
      {/* <RandomUsersScreen/> */}
      {/* <FlatList_Example1 /> */}
      <FlatList_HeaderFooter/>
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
