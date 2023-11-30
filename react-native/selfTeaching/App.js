import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text cliked");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello Youssouf !</Text>
      <Image
      blurRadius={10}
      fadeDuration={1000}//only for android
      source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300"
      }}/>
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
