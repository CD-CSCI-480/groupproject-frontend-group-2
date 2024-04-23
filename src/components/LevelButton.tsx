import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LevelButtonProps {
  destination: string;
  buttonText: string;
}

const LevelButton: React.FC<LevelButtonProps> = ({ destination, buttonText }) => {
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
    backgroundColor: '#ff8906',
    borderColor: 'black',
    borderWidth: 3,
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
  },
  buttonText: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default LevelButton;
