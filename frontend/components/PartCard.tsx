import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, TextInput } from 'react-native-paper';
import StatusSelector, { Status } from './StatusSelector';
import { InspectionPart } from '../types';

interface Props {
  part: string;
  data: InspectionPart;
  onChange: (data: InspectionPart) => void;
}

export default function PartCard({ part, data, onChange }: Props) {
  return (
    <Card style={styles.card}>
      <Card.Title title={part} titleStyle={styles.title} />
      <Card.Content>
        <StatusSelector
          status={data.status as Status}
          onChange={status => onChange({ ...data, status })}
        />
        <TextInput
          mode="outlined"
          placeholder="Add note"
          value={data.note}
          onChangeText={note => onChange({ ...data, note })}
          style={styles.note}
        />
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 8 },
  title: { fontWeight: 'bold' },
  note: { marginTop: 8 }
});
