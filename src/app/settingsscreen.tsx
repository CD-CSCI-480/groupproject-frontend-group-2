import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import QuantumCheckersTitle from '../components/QuantumCheckersTitle';

class SettingsScreen extends React.Component {
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
          
          {/* Menu Buttons */}
          <View style={styles.textContainer}>
            <View style={styles.textInnerContainer}>
              <Text style={styles.text}>
                Settings Menu Coming Soon!
              </Text>
              
              <Text style={styles.smallText}>
                - Button To Reset Scores
              </Text>

              <Text style={styles.smallText}>
                - Other Misc. Buttons
              </Text>

            </View>
          </View>

        </View>

      </ImageBackground>
    );
  }
}

export default SettingsScreen;


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
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'black',
  },
  textInnerContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 150,
  },
  text: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center', // Center align the text
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center', // Center align the text
    margin: 20,
  }
});
