import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrivateKey } from 'symbol-sdk';

export default function App() {
  useEffect(() => {
    const rndom = PrivateKey.random();
    console.log(rndom.toString());
  }, []);

  return (
    <View style={styles.container}>
      <Text>symbol-sdk-expo-sample</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
