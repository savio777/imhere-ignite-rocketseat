import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonIcon from "../ButtonIcon";
import styles from "./styles";

type Props = {
  name: string;
  onPressRemove: () => void;
};

const Participant: React.FC<Props> = ({ name, onPressRemove }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{name}</Text>
    <ButtonIcon type="remove" onPress={onPressRemove} />
  </View>
);

export default Participant;
