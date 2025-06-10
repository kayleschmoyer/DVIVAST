import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';

interface Props { onLogin: (id: string) => void }

export default function LoginScreen({ onLogin }: Props) {
  const [id, setId] = useState('');
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Technician Login</Title>
      <TextInput
        mode="outlined"
        label="Mechanic ID"
        value={id}
        onChangeText={setId}
        style={styles.input}
      />
      <Button mode="contained" onPress={() => onLogin(id)}>
        Continue
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { textAlign: 'center', marginBottom: 24 },
  input: { marginBottom: 16 }
});
