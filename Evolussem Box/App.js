import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import StackNavigation from './src/navigation/StackNavigation';


export default function App() {
  return (
    <StackNavigation />
  );
}


// "dependencies": {
//   "expo": "~47.0.12",
//   "expo-splash-screen": "~0.17.5",
//   "expo-status-bar": "~1.4.2",
//   "react": "18.1.0",
//   "react-native": "0.70.5",
//   "react-native-ble-manager": "^8.6.0",
//   "react-native-ble-plx": "^2.0.3",
//   "react-native-bluetooth-devices": "^0.1.7",
//   "react-native-bluetooth-state-manager": "^1.3.4",
//   "react-native-webview": "11.23.1",
//   "react-native-screens": "~3.18.0",
//   "@react-navigation/stack": "^6.3.1",
//   "react-native-svg": "^13.2.0",
//   "@react-navigation/native": "^6.0.13",
//   "@react-native-community/masked-view": "^0.1.11"
// },