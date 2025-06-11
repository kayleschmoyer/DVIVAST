import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import PartCard from '../components/PartCard';
import { QuadrantData } from '../types';
import { submitInspection } from '../api/client';

interface Props { estimateId: string; mechanicId: string }

const parts = ['Brakes', 'Tires', 'Fluids'];
const quadrants = ['FL', 'FR', 'RL', 'RR'];

export default function InspectionScreen({ estimateId, mechanicId }: Props) {
  const [data, setData] = useState<Record<string, Record<string, QuadrantData>>>({});
  const [msg, setMsg] = useState('');

  const handleSubmit = async () => {
    const partsPayload = Object.entries(data).flatMap(([part, quads]) =>
      quadrants.map(q => {
        const qData = quads[q] || { status: 'NA' };
        return {
          part,
          quadrant: q,
          status: qData.status,
          note: qData.note,
          photoUrl: qData.photoUri
        };
      })
    );
    const payload = {
      estimateId,
      mechanicId,
      parts: partsPayload,
      timestamp: new Date().toISOString()
    };
    try {
      await submitInspection(payload);
      setMsg('Inspection submitted');
    } catch {
      setMsg('Failed to submit');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {parts.map(part => (
          <PartCard
            key={part}
            part={part}
            data={data[part] || {}}
            onChange={newData => setData(prev => ({ ...prev, [part]: newData }))}
          />
        ))}
      </ScrollView>
      <Button mode="contained" onPress={handleSubmit} style={styles.submit}>
        Submit Inspection
      </Button>
      <Snackbar visible={!!msg} onDismiss={() => setMsg('')}>{msg}</Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 16 },
  submit: { margin: 16 }
});
