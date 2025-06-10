import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

interface Props { onLogin: (id: string) => void }

export default function LoginScreen({ onLogin }: Props) {
  const [id, setId] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Mechanic ID"
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <Button title="Login" onPress={() => onLogin(id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16 }
});
