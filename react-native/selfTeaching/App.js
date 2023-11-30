import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback, TouchableNativeFeedback, SafeAreaView} from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text cliked");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello Youssouf !</Text>
      {/* only android */}
      <TouchableNativeFeedback onPress={() => console.log("Image tapped")}> 
        <View style={{ width:200, height:70, backgroundColor: "dodgerblue" }}></View>
      </TouchableNativeFeedback>
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
