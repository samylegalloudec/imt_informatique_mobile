import React from "react";
import { Text, TouchableHighlight, StyleSheet } from "react-native";

/**
 * Composant représentant une option de menu.
 *
 *
 *
 */
const OptionMenu = (props) => (
  <TouchableHighlight
    underlayColor="#efefef"
    style={[styles.item, styles.selected, styles.border, styles.selected]}
  >
    <Text onPress={props.onPress} style={[styles.itemText, styles.bold]}>
      {props.title}
    </Text>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  border: {
    borderLeftWidth: 1,
    borderLeftColor: "#dddddd",
  },
  itemText: {
    color: "#777777",
    fontSize: 16,
  },
  selected: {
    backgroundColor: "#ffffff",
  },
  bold: {
    fontWeight: "bold",
  },
});
export default OptionMenu;
