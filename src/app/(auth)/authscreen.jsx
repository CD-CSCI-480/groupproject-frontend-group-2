import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import Button from '../../components/Button';
import QuantumCheckersTitle from '../../components/QuantumCheckersTitle';

class AuthScreen extends React.Component {
  render() {
    return (
      <ImageBackground
      source={require('../../../assets/background.jpg')}
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
              source={require('../../../assets/QuantumCheckersIcon_Black.png')}
              style={styles.image}
            />
          </View>
  
          {/* Menu Buttons */}
          <View style={styles.buttons}>
              {/* Log In Button */}
               <Link href={'/(log-in)'} asChild>
               <Button text="Log In" />
               </Link>
              {/* Sign Up Button */}
              <Link href={'/(sign-up)'} asChild>
                <Button text="Sign Up" />
              </Link>
          </View>

          <View style={styles.backButton}>
            {/* Back Button */}
            <Link href={'/(mainmenu)'} asChild>
                <Button text="Back" />
            </Link>
          </View>
  
        </View>
      </ImageBackground>
    );
  }
} 

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // Space evenly between content
    paddingTop: 30, // Add margin to the top of the container
    paddingHorizontal: 20, // Add horizontal padding
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
    padding: 15,
    justifyContent: 'center', // Center the buttons vertically
    alignItems: 'center', // Center buttons horizontally
  },
  backButton: {
   justifyContent: 'center', // Center the buttons vertically
   alignItems: 'center', // Center buttons horizontally
   paddingBottom: 30,
  },
})

