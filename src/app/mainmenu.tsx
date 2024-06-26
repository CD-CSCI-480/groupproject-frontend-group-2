import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import NavigateButton from '../components/NavigateButton'; // Import the NavigateButton component
import QuantumCheckersTitle from '../components/QuantumCheckersTitle';
import LevelSelectScreen from './levelselectscreen'; // Import the LevelSelectScreen component

class MainMenu extends React.Component {
  render() {
    return (
      <ImageBackground
      source={require('../../assets/background.jpg')}
        style={styles.container}
      >
        <View style={styles.container}>
          {/* Title */}
          <View style={styles.title}>
            <QuantumCheckersTitle />
          </View>
          {/* QC Image */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/QuantumCheckersIcon_White.png')}
              style={styles.image}
            />
          </View>
          {/* Menu Buttons */}
          <View style={styles.buttons}>
            {/* Start Game Button */}
            <View style={styles.button}>
              <NavigateButton destination="StartGame" buttonText="Start Game" />
            </View>
            {/* Level Select Button */}
            <View style={styles.button}>
                <NavigateButton destination={LevelSelectScreen} buttonText="Level Select" />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default MainMenu;


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
