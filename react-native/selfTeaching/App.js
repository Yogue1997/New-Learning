import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Alert, Button} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text cliked");
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        color="blue"
        title='click me'
        onPress={''}
      />
    </SafeAreaView>
  );
}

const containerStyle = { backgroundColor: "orange" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
