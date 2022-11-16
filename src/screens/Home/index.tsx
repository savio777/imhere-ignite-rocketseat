import { useState } from "react";
import {
  Alert,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ButtonIcon from "../../components/ButtonIcon";
import Participant from "../../components/Participant";

import styles from "./styles";

export default function Home() {
  const [nameParticipant, setNameParticipant] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleParticipantAdd = () => {
    if (participants.includes(nameParticipant)) {
      Alert.alert(
        "Participante já existe",
        "Já existe um participante na lista com esse nome"
      );
      return;
    }

    setParticipants((prevState) => [...prevState, nameParticipant]);
    setNameParticipant("");
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert(
      "Remover participante",
      `Você realmente deseja remover o participante: ${name}?`,
      [
        {
          text: "Sim",
          onPress: () => {
            setParticipants((prevState) => [
              ...prevState.filter((participant) => participant !== name),
            ]);
          },
        },
        { text: "Não", onPress: () => {} },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.input}
          value={nameParticipant}
          onChangeText={setNameParticipant}
        />

        <ButtonIcon type="add" onPress={handleParticipantAdd} />
      </View>

      <FlatList
        keyExtractor={(_, index) => String(index)}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onPressRemove={() => handleParticipantRemove(item)}
          />
        )}
        style={{ marginTop: 30 }}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lsita
            de presença.
          </Text>
        )}
      />
    </View>
  );
}
