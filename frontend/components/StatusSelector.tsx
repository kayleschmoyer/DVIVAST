import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

export type Status = 'GREEN' | 'YELLOW' | 'RED' | 'NA';

interface Props {
  status: Status;
  onChange: (status: Status) => void;
}

const options: { key: Status; icon: string; color: string }[] = [
  { key: 'GREEN', icon: 'check-circle-outline', color: '#4caf50' },
  { key: 'YELLOW', icon: 'alert-circle-outline', color: '#fbc02d' },
  { key: 'RED', icon: 'close-circle-outline', color: '#f44336' },
  { key: 'NA', icon: 'minus-circle-outline', color: '#9e9e9e' }
];

export default function StatusSelector({ status, onChange }: Props) {
  return (
    <View style={styles.row}>
      {options.map(opt => (
        <IconButton
          key={opt.key}
          icon={opt.icon}
          size={28}
          iconColor={status === opt.key ? '#fff' : opt.color}
          containerColor={status === opt.key ? opt.color : undefined}
          onPress={() => onChange(opt.key)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }
});
