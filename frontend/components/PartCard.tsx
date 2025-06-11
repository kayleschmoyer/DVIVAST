import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import QuadrantSection, { QuadrantData } from './QuadrantSection';

interface Props {
  part: string;
  data: Record<string, QuadrantData>;
  onChange: (data: Record<string, QuadrantData>) => void;
}

const quadrants = ['FL', 'FR', 'RL', 'RR'];

/**
 * Displays inspection details for a single vehicle part with four quadrants.
 */
export default function PartCard({ part, data, onChange }: Props) {
  const handleChange = (q: string, qData: QuadrantData) => {
    onChange({ ...data, [q]: qData });
  };

  return (
    <Card style={styles.card}>
      <Card.Title title={part} titleStyle={styles.title} />
      <Card.Content>
        {quadrants.map(q => (
          <QuadrantSection
            key={q}
            label={q}
            data={data[q] || { status: 'NA' }}
            onChange={val => handleChange(q, val)}
          />
        ))}
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { marginVertical: 8 },
  title: { fontWeight: 'bold' }
});
