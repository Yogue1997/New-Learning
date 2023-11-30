import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TouchableWithoutFeedback, SafeAreaView} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text cliked");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Youssouf !</Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image tapped")}>
      <Image
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}/>
      </TouchableWithoutFeedback>
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
