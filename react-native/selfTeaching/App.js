import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Alert, Button} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text cliked");
  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title='click me'
        onPress={() =>
          // this works only for iphone
          Alert.prompt("My title", "My message", text => console.log(text))
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
