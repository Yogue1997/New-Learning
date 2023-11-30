import { View } from 'react-native';

import { useImageDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        flex:1
      }}/>
      <View style={{
        backgroundColor: "gold",
        flex:1
      }}/>
      <View style={{
        backgroundColor: "tomato",
        flex:1
      }}/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });
