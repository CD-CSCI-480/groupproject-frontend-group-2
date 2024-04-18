import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'; 
import MainMenu from './src/app/mainmenu';
import AuthScreen from './src/app/authscreen';
import SettingsScreen from './src/app/settingsscreen';
import LevelSelectScreen from './src/app/levelselectscreen'; 

const Tab = createBottomTabNavigator(); // Bottom Tab Nav

const Stack = createStackNavigator(); // Stack Nav

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainMenu" component={MainMenu} />
      <Stack.Screen name="LevelSelectScreen" component={LevelSelectScreen} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === 'MainStack') {
              iconSource = focused ? require('./assets/white_home_icon.png') : require('./assets/white_home_icon.png');
            } else if (route.name === 'AuthScreen') {
              iconSource = focused ? require('./assets/white_accounts_icon.png') : require('./assets/white_accounts_icon.png');
            } else if (route.name === 'SettingsScreen') {
              iconSource = focused ? require('./assets/white_settings_icon.png') : require('./assets/white_settings_icon.png');
            }

            return <Image source={iconSource} style={{ width: 30, height: 30, tintColor: color }} />;
          },
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
            elevation: 0,
            height: 100,
          },
          tabBarActiveTintColor: 'orange', // Move activeTintColor to screenOptions
          tabBarInactiveTintColor: 'white', // Move inactiveTintColor to screenOptions
        })}
      >
        <Tab.Screen name='MainStack' component={MainStack} options={{ headerShown: false, tabBarLabel: '' }} />
        <Tab.Screen name='AuthScreen' component={AuthScreen} options={{ headerShown: false, tabBarLabel: ''}} />
        <Tab.Screen name='SettingsScreen' component={SettingsScreen} options={{ headerShown: false, tabBarLabel: ''}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: "blue",
    fontWeight: "bold",
  },
});
