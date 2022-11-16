import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import styles from "./styles";

type Props = {
  type: "add" | "remove";
} & TouchableOpacityProps;

const ButtonIcon: React.FC<Props> = ({ type, ...props }) => (
  <TouchableOpacity
    style={[
      styles.button,
      type === "add" ? styles.buttonAdd : styles.buttonRemove,
    ]}
    {...props}
  >
    <Text style={styles.buttonText}>{type === "add" ? "+" : "-"}</Text>
  </TouchableOpacity>
);

export default ButtonIcon;
