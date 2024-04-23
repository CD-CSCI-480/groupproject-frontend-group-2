import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LevelButton from '../components/LevelButton'; // Import the NavigateButton component
import MainMenu from './mainmenu';
import NavigateButton from '../components/NavigateButton'; // Import the NavigateButton component

class LevelSelectScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 

         {/* Title */}
         <View style={styles.textContainer}>
            <View style={styles.textInnerContainer}>
               <Text style={styles.text}>
                  Level Select
               </Text>
            </View>
         </View>

         {/* Level Buttons */}
         <View style={styles.buttonCol} >
            {/* Row One */}
            <View style={styles.buttonRow}>
               {/* 1 */}
               <View style={styles.button}>
               <LevelButton destination="Level1" buttonText="1" />
               </View>
               {/* 2 */}
               <View style={styles.button}>
               <LevelButton destination="Level2" buttonText="2" />
               </View>
               {/* 3 */}
               <View style={styles.button}>
               <LevelButton destination="Level3" buttonText="3" />
               </View>
               {/* 4 */}
               <View style={styles.button}>
               <LevelButton destination="Level4" buttonText="4" />
               </View>
               {/* 5 */}
               <View style={styles.button}>
               <LevelButton destination="Level5" buttonText="5" />
               </View>
            </View>

            {/* Row Two */}
            <View style={styles.buttonRow}>
               {/* 6 */}
               <View style={styles.button}>
               <LevelButton destination="Level6" buttonText="6" />
               </View>
               {/* 7 */}
               <View style={styles.button}>
               <LevelButton destination="Level7" buttonText="7" />
               </View>
               {/* 8 */}
               <View style={styles.button}>
               <LevelButton destination="Level8" buttonText="8" />
               </View>
               {/* 9 */}
               <View style={styles.button}>
               <LevelButton destination="Level9" buttonText="9" />
               </View>
               {/* 10 */}
               <View style={styles.button}>
               <LevelButton destination="Level10" buttonText="10" />
               </View>
            </View>
         </View>

         {/* Back Button */}
         <View style={styles.backButton}>
                <NavigateButton destination={MainMenu} buttonText="Back" />
         </View>
         
      </View>
    );
  }
}

export default LevelSelectScreen;


const styles = StyleSheet.create({
   container: {
     flex: 1,
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
   buttonCol: {
      display: 'flex',
      flexDirection: 'column',
   },
   buttonRow: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', // Center the buttons vertically
      alignItems: 'center', // Center buttons horizontally
    },
    button: {
      paddingVertical: 30,
      padding: 12, // Add vertical margin between buttons
    },
    backButton: {
      paddingTop: 65
    }
 });