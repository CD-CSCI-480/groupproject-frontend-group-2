import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import NavigateButton from '../components/NavigateButton'; // Import the NavigateButton component
import AuthScreen from './authscreen';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 

         {/* Title */}
         <View style={styles.textContainer}>
            <View style={styles.textInnerContainer}>
               <Text style={styles.text}>
                  Sign In
               </Text>
            </View>
         </View>

         {/* Text Input Fields */}
         <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
         </View>

         {/* Login Button */}
         <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
         </TouchableOpacity>

         {/* Back Button */}
         <View style={styles.backButton}>
                <NavigateButton destination={AuthScreen} buttonText="Back" />
         </View>
         
      </View>
    );
  }
}

export default LoginScreen;


const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-around',
     alignItems: 'center',
     paddingTop: 30, // Add margin to the top of the container
     paddingHorizontal: 20, // Add horizontal padding
     backgroundColor: '#0f0e17',
   },
   textContainer: {
     justifyContent: 'center',
     borderColor: 'black',
     paddingTop: 45,
   },
   textInnerContainer: {
     backgroundColor: '#9E451F',
     borderRadius: 10,
     padding: 15,
     marginBottom: 150,
   },
   text: {
     fontSize: 30,
     color: 'white',
     textAlign: 'center', // Center align the text
     fontWeight: 'bold',
   },
   inputContainer: {
      width: '80%',
    },
    input: {
      backgroundColor: 'white',
      marginBottom: 25,
      borderRadius: 10,
      padding: 20,
      fontSize: 20,
    },
    loginButton: {
      backgroundColor: '#9E451F',
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 20,
      marginBottom: 20,
    },
    loginButtonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    backButton: {
      paddingTop: 65
    }
 });