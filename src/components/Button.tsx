import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type ButtonProps = {
  text: string;
  destination: string;
};

const Button: React.FC<ButtonProps> = ({ text, destination }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate(destination);
  };

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#9E451F',
    padding: 15,
    alignItems: 'center',
    borderRadius: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
