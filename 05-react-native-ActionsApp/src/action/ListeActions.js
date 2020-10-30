import React from "react";
import { View, Text } from "react-native";
import UneAction from "./UneAction";

const ListeActions = (props) => {
  return (
    <View>
      {props.actions.map((action, i) => {
        return (
          <UneAction
            key={i}
            action={action}
            onSupprimer={() => props.onSupprimer(i)}
            onTerminer={() => props.onTerminer(i)}
          />
        );
      })}
    </View>
  );
};

export default ListeActions;
