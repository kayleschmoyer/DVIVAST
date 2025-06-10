import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StatusSelector from './StatusSelector';
import { InspectionPart } from '../types';

interface Props {
  part: string;
  data: InspectionPart;
  onChange: (data: InspectionPart) => void;
}

export default function PartCard({ part, data, onChange }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{part}</Text>
      <StatusSelector status={data.status} onChange={(status) => onChange({ ...data, status })} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  },
  title: { fontWeight: 'bold', marginBottom: 8 }
});
