import { View } from 'react-native';

import { useImageDimensions, useDeviceOrientation } from '@react-native-community/hooks';

export default function App() {
  console.log(useDeviceOrientation());

  const { landscape } = useDeviceOrientation();

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center",
    }}>
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        flexShrink: 1,//same as flex:-1. To help content to be in the middle instead of overflowing 
        height: 100
      }}/>
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
        top: 20,
        // bottom: 20,
        left: 20,
        position: "relative"
      }}/>
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100
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
