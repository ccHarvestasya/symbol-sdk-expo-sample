import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrivateKey } from 'symbol-sdk';
import { SymbolFacade } from 'symbol-sdk/src/symbol';

export default function App() {
  useEffect(() => {
    console.log('秘密鍵作成', PrivateKey.random().toString());

    console.log('facade 作成', new SymbolFacade('testnet'));
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
