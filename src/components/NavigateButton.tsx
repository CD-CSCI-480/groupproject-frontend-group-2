import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface NavigateButtonProps {
  destination: string;
  buttonText: string;
}

const NavigateButton: React.FC<NavigateButtonProps> = ({ destination, buttonText }) => {
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate(destination); // 'destination' throws error that isn't even an error lmao (react is dumb moment #244,960,235)
  };

  return (
    <TouchableOpacity style={styles.button} onPress={navigateToScreen}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9E451F',
    padding: 15,
    borderRadius: 100,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default NavigateButton;
