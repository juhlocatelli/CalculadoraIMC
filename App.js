import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title.js';
import FormIMC from './src/components/FormIMC.js';
import Classification from './src/components/Classification.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}
//ESTILIZAÇÃO
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});

