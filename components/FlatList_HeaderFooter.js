import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ViewBase,
} from "react-native";
import React, { useState } from "react";



const FlatList_HeaderFooter = () => {
  const [dataSource, setDataSource] = useState([
        { id: 1, title: "Button" },
        { id: 2, title: "Card" },
        { id: 3, title: "Input" },
        { id: 4, title: "Avatar" },
        { id: 5, title: "CheckBox" },
        { id: 6, title: "Header" },
        { id: 7, title: "Icon" },
        { id: 8, title: "Lists" },
        { id: 9, title: "Rating" },
        { id: 10, title: "Pricing" },
        { id: 11, title: "Avatar" },
        { id: 12, title: "CheckBox" },
        { id: 13, title: "Header" },
        { id: 14, title: "Icon" },
        { id: 15, title: "Lists" },
  ]);

  const EmptyListMessage = ({item}) => {
    return(
        <Text
         style={styles.emptyListStyle}
         onPress={() => getItem(item)}
        >
            No Data Found
        </Text>
    )  
  }

  const ListHeader = () =>{
    //View to set in header
    return(
        <View style={styles.headerFooterStyle}>
            <Text style={styles.textStyle}> 
                React Native Components
            </Text>
        </View>
    )
  }

  const ListFooter = () =>{
    return(
        <View style={styles.headerFooterStyle}>
            <Text style={styles.textStyle}> 
                Thai-Nichi Institute of Technology
            </Text>
        </View>
    )
  }

  const ItemView = ({ item }) => {
    return (
      //Flatlist item
      <View>
        <Text style={styles.itemStyle} onPress={() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      //Flatlist Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    //Function ofr click on item
    alert("ID : " + item.id + " Value: " + item.title);
  };

  

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
          keyExtractor={(item) => item.id.toString()}
          ListEmptyComponent={EmptyListMessage}
          //Header to show above listview
          ListHeaderComponent={ListHeader}
          //Footer to show below listview
          ListFooterComponent={ListFooter}
        />
      </View>
    </SafeAreaView>
  );
};

export default FlatList_HeaderFooter;

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
});
