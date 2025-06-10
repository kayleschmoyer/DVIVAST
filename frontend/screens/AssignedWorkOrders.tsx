import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ActivityIndicator, Card, Text, Snackbar } from 'react-native-paper';
import { fetchWorkOrders } from '../api/client';
import { WorkOrder } from '../types';

interface Props { mechanicId: string; onSelect: (id: string) => void }

export default function AssignedWorkOrders({ mechanicId, onSelect }: Props) {
  const [orders, setOrders] = useState<WorkOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchWorkOrders(mechanicId)
      .then(data => setOrders(data))
      .catch(() => setError('Failed to load orders'))
      .finally(() => setLoading(false));
  }, [mechanicId]);

  if (loading) {
    return <ActivityIndicator style={styles.loader} />;
  }

  return (
    <>
      <FlatList
        data={orders}
        keyExtractor={item => item.EstimateId}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Card style={styles.card} onPress={() => onSelect(item.EstimateId)}>
            <Card.Title title={item.Vehicle} subtitle={item.ServiceWriter} />
          </Card>
        )}
      />
      <Snackbar visible={!!error} onDismiss={() => setError('')}>{error}</Snackbar>
    </>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
  card: { marginBottom: 12 },
  loader: { flex: 1, justifyContent: 'center' }
});
