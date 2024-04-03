import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QuantumCheckersTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quantum Checkers</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9E451F',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default QuantumCheckersTitle;
