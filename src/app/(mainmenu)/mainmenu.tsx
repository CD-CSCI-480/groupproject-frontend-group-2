import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import Button from '../src/components/Button.tsx';
import IconButton from '../src/components/IconButton.tsx'; // Import the IconButton component
import QuantumCheckersTitle from '../src/components/QuantumCheckersTitle.tsx';

export default function App() {
  return (
    <ImageBackground // Use ImageBackground instead of View
      source={require('./assets/background.jpg')} // Set your image path here
      style={styles.container} // Apply styles to ImageBackground
    >
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

        {/* Icon Images using IconButton component */}
        <View style={styles.iconsContainer}>
          {/* Accounts Icon Button */}
          <IconButton iconSource={require('./assets/white_accounts_icon.png')} />
          {/* Info Icon Button*/}
          <IconButton iconSource={require('./assets/white_info_icon.png')} />
          {/* Settings Icon Button*/}
          <IconButton iconSource={require('./assets/white_settings_icon.png')} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Space evenly between content
    paddingTop: 30, // Add margin to the top of the container
    paddingHorizontal: 20, // Add horizontal padding
  },
  title: {
    flex: 0.3, // Each part takes up an equal amount of space
    justifyContent: 'center', // Center the title vertically
    paddingBottom: 30, 
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
    paddingBottom: 15, // Add vertical margin between buttons
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center', // Center the images horizontally
    paddingBottom: 30, // Add padding to the bottom of the icons container
  },
});
