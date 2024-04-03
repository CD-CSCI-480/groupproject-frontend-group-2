import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainMenu from "./src/app/(mainmenu)/mainmenu";

export default function App() {
  return (
    <View style={styles.container}>
      <MainMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

