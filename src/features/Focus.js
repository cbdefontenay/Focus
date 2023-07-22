import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../utils/colors";
import { RoundedButton } from "../components/RoundedButton";
import { spacing } from "../utils/sizes";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={subject}
          style={styles.textInput}
          placeholder='What would you like to focus on?'
          onChangeText={setSubject}
        />
        <View style={styles.button}>
          <RoundedButton
            title='+'
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    padding: spacing.xl,
    justifyContent: "top",
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
    color: "#000",
    backgroundColor: colors.white,
    borderRadius: 20,
  },
});
