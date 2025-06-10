import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import AssignedWorkOrders from './screens/AssignedWorkOrders';
import InspectionScreen from './screens/InspectionScreen';
import { ErrorBoundary } from './components/ErrorBoundary';

export type RootStackParamList = {
  Login: undefined;
  Orders: { mechanicId: string };
  Inspection: { mechanicId: string; estimateId: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [mechanicId, setMechanicId] = useState<string | null>(null);
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator>
          {!mechanicId ? (
            <Stack.Screen name="Login">
              {() => <LoginScreen onLogin={setMechanicId} />}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Orders" options={{ title: 'Work Orders' }}>
                {({ navigation }) => (
                  <AssignedWorkOrders
                    mechanicId={mechanicId}
                    onSelect={estimateId =>
                      navigation.navigate('Inspection', { mechanicId, estimateId })
                    }
                  />
                )}
              </Stack.Screen>
              <Stack.Screen
                name="Inspection"
                component={InspectionScreen}
                initialParams={{ mechanicId, estimateId: '' }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
