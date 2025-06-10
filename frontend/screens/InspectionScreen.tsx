import React, { useState } from 'react';
import { ScrollView, Button, View } from 'react-native';
import PartCard from '../components/PartCard';
import { InspectionPart } from '../types';
import { submitInspection } from '../api/client';

interface Props { estimateId: string; mechanicId: string }

const parts = ['Brakes', 'Tires', 'Fluids'];

export default function InspectionScreen({ estimateId, mechanicId }: Props) {
  const [data, setData] = useState<Record<string, InspectionPart>>({});

  const handleSubmit = () => {
    const payload = {
      estimateId,
      mechanicId,
      parts: Object.entries(data).map(([part, partData]) => ({
        part,
        ...partData
      })),
      timestamp: new Date().toISOString()
    };
    submitInspection(payload).catch(() => {});
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {parts.map(part => (
          <PartCard
            key={part}
            part={part}
            data={data[part] || { quadrant: 'ALL', status: 'NA' }}
            onChange={newData => setData(prev => ({ ...prev, [part]: newData }))}
          />
        ))}
      </ScrollView>
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
