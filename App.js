import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainMenu from './src/app/mainmenu';
import AuthScreen from './src/app/authscreen';
import SettingsScreen from './src/app/settingsscreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainMenu"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource;

            if (route.name === 'MainMenu') {
              iconSource = focused ? require('./assets/white_home_icon.png') : require('./assets/white_home_icon.png');
            } else if (route.name === 'AuthScreen') {
              iconSource = focused ? require('./assets/white_accounts_icon.png') : require('./assets/white_accounts_icon.png');
            } else if (route.name === 'SettingsScreen') {
              iconSource = focused ? require('./assets/white_settings_icon.png') : require('./assets/white_settings_icon.png');
            }

            return <Image source={iconSource} style={{ width: 30, height: 30, tintColor: color }} />;
          },
          tabBarStyle: {
            backgroundColor: 'black', // Change to black
            borderTopWidth: 0,
            elevation: 0, // remove shadow on Android
            height: 100, // Increase height of the tabBar
          },
        })}
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'white',
        }}
      >
        <Tab.Screen name='MainMenu' component={MainMenu} options={{ headerShown: false, tabBarLabel: '' }} />
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
