import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchWorkOrders } from '../api/client';
import { WorkOrder } from '../types';

interface Props { mechanicId: string; onSelect: (id: string) => void }

export default function AssignedWorkOrders({ mechanicId, onSelect }: Props) {
  const [orders, setOrders] = useState<WorkOrder[]>([]);

  useEffect(() => {
    fetchWorkOrders(mechanicId).then(setOrders).catch(() => {
      // error handling
    });
  }, [mechanicId]);

  return (
    <FlatList
      data={orders}
      keyExtractor={item => item.EstimateId}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => onSelect(item.EstimateId)}>
          <Text>{item.Vehicle}</Text>
          <Text>{item.ServiceWriter}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2
  }
});
