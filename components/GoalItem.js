import { View, Text, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this,props.id)}>
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "lavender",
    borderColor: "purple",
    borderWidth: 1,
  },
});

export default GoalItem;
