import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import Button from '../src/components/Button.tsx';
import QuantumCheckersTitle from '../src/components/QuantumCheckersTitle.tsx';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Title */}
      <View style={styles.title}>
        <QuantumCheckersTitle />
      </View>

      {/* QC Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/QuantumCheckersIcon_Black.png')}
          style={styles.image}
        />
      </View>

      {/* Menu Buttons */}
      <View style={styles.buttons}>
        {/* Start Game Button */}
        <View style={styles.button}>
          <Link href={'/(start-game)'} asChild>
            <Button text="Start Game" />
          </Link>
        </View>
        {/* Level Select Button */}
        <Link href={'/(level-select)'} asChild>
          <Button text="Level Select" />
        </Link>
      </View>

      {/* Icon Images */}
      <View style={styles.iconsContainer}>
        {/* Accounts Icon Button (button doesn't work, need component for that) */}
        <Image
          source={require('./assets/accountsicon.png')}
          style={styles.iconImages}
        />
        {/* Info Icon Button*/}
        <Image
          source={require('./assets/information.png')}
          style={styles.iconImages}
        />
        {/* Settings Icon Button*/}
        <Image
          source={require('./assets/setting-lines.png')}
          style={styles.iconImages}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC5500',
    alignItems: 'center',
    justifyContent: 'space-between', // Space evenly between content
    paddingTop: 55, // Add margin to the top of the container
    paddingHorizontal: 20, // Add horizontal padding
  },
  title: {
    flex: 0.5, // Each part takes up an equal amount of space
    justifyContent: 'center', // Center the title vertically
  },
  imageContainer: {
    flex: 1, // Each part takes up an equal amount of space
    justifyContent: 'center', // Center the image vertically
  },
  image: {
    width: 300,
    height: 300,
  },
  buttons: {
    flex: 1, // Each part takes up an equal amount of space
    justifyContent: 'center', // Center the buttons vertically
    alignItems: 'center', // Center buttons horizontally
  },
  button: {
    paddingBottom: 10, // Add vertical margin between buttons
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the images horizontally
    paddingBottom: 40, // Add padding to the bottom of the icons container
  },
  iconImages: {
    width: 60,
    height: 60,
    marginHorizontal: 15, // Add horizontal margin between images
  },
});
