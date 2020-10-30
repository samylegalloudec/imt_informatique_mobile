import React from "react";
import { View, StyleSheet } from "react-native";
import OptionMenu from "./OptionMenu";

/**
 * Composant Menu.
 */

export const toutes = "Toutes";
export const actives = "Actives";
export const terminees = "Terminées";
const Menu = (props) => (
  <View style={styles.menu}>
    <OptionMenu title={toutes} onPress={props.onFilter({ toutes })} />
    <OptionMenu title={actives} onPress={props.onFilter({ actives })} />
    <OptionMenu title={terminees} onPress={props.onFilter({ terminees })} />
  </View>
);

const styles = StyleSheet.create({
  menu: {
    height: 70,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
});
export default Menu;
