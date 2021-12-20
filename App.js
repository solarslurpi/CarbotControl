
import { StyleSheet, Text, View } from 'react-native';
import CarbotControl from './components/CarbotControl';
import Header from './UI/Header';

export default function App() {
  console.log('-> TOP of App()');
  return (
    <>
      <Header />
      <View style={styles.container}>
        <CarbotControl />
      </View>
    </>
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
