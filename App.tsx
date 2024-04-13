import './shim';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PrivateKey } from 'symbol-sdk';
import { SymbolFacade, KeyPair } from 'symbol-sdk/src/symbol';

export default function App() {
  useEffect(() => {
    const privateKey = PrivateKey.random();
    console.log('Your PrivateKey', privateKey.toString());

    const facade = new SymbolFacade('testnet');
    const transaction = facade.transactionFactory.create({
      type: 'transfer_transaction_v1',
      signerPublicKey: '87DA603E7BE5656C45692D5FC7F6D0EF8F24BB7A5C10ED5FDA8C5CFBC49FCBC8',
      fee: 1000000n,
      deadline: 41998024783n,
      recipientAddress: 'TCHBDENCLKEBILBPWP3JPB2XNY64OE7PYHHE32I',
      mosaics: [{ mosaicId: 0x7cdf3b117a3c40ccn, amount: 1000000n }],
    });

    const signature = facade.signTransaction(new facade.static.KeyPair(privateKey), transaction);
    const jsonPayload = facade.transactionFactory.static.attachSignature(transaction, signature);

    console.log('Signed result', jsonPayload);
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
