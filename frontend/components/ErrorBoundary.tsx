import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { log } from '../utils/Logger';

interface State { hasError: boolean }

export class ErrorBoundary extends React.Component<{}, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    log('ERROR', error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.center}>
          <Text>Something went wrong.</Text>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});
