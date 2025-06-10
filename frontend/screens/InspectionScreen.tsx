import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import PartCard from '../components/PartCard';
import { InspectionPart } from '../types';
import { submitInspection } from '../api/client';

interface Props { estimateId: string; mechanicId: string }

const parts = ['Brakes', 'Tires', 'Fluids'];

export default function InspectionScreen({ estimateId, mechanicId }: Props) {
  const [data, setData] = useState<Record<string, InspectionPart>>({});
  const [msg, setMsg] = useState('');

  const handleSubmit = async () => {
    const payload = {
      estimateId,
      mechanicId,
      parts: Object.entries(data).map(([part, partData]) => ({ part, ...partData })),
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
            data={data[part] || { quadrant: 'ALL', status: 'NA' }}
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
