import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  status: string;
  onChange: (status: string) => void;
}

const options = ['GREEN', 'YELLOW', 'RED', 'NA'];

export default function StatusSelector({ status, onChange }: Props) {
  return (
    <View style={styles.row}>
      {options.map(opt => (
        <TouchableOpacity
          key={opt}
          style={[styles.button, status === opt && styles.selected]}
          onPress={() => onChange(opt)}
        >
          <Text>{opt}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginVertical: 8 },
  button: { flex: 1, padding: 8, alignItems: 'center', borderWidth: 1, borderColor: '#ccc' },
  selected: { backgroundColor: '#dde' }
});
